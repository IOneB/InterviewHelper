<template>
  <q-layout view="lhh LpR lff" class="shadow-2 rounded-borders">
    <interview-navigation
      :subjects="subjects"
      :currentSubject="currentSubject"
      @activate="activateSection"
    />

    <q-page-container>
      <q-page class="q-pa-md">
        <div v-for="subject in subjects" :key="subject.id">
          <interview-candidates
            @reloadCandidates="load"
            @candidateSelected="onCandidateSelected"
            @onLoading="onLoading"
            :currentCandidate="currentCandidate"
            :candidates="candidates"
            v-show="subject.id === currentSubject"
            v-if="subject.id === 'Candidates'"
          >
            {{ subject.id === "Candidates" }}
          </interview-candidates>
          <interview-page
            v-else
            :activeSkill="allSkills[activeSkillIndex]"
            :subject="subject"
            :show="subject.id === currentSubject"
          />
        </div>
      </q-page>

      <interview-save-button
        @save="save"
        :candidateNotSelected="candidateNotSelected"
      />
    </q-page-container>
  </q-layout>
  <q-inner-loading :showing="loading">
    <q-spinner-gears size="50px" color="primary" />
  </q-inner-loading>
</template>

<script>
import { Notify } from "quasar";

import parameters from "./modules/common-parameters.js";
import interfaceModule from "./modules/interface-template";

import InterviewNavigation from "./components/InterviewNavigation.vue";
import InterviewPage from "./components/InterviewPage.vue";
import InterviewCandidates from "./components/InterviewCandidates.vue";
import InterviewSaveButton from "./components/InterviewSaveButton.vue";

export default {
  data() {
    return {
      candidates: [],
      currentCandidate: null,
      subjects: interfaceModule.createSubjects(),
      currentSubject: "Candidates",
      loading: true,

      activeSkillIndex: 0,
      allSkills: [],
    };
  },
  async created() {
    this.loading = true;

    await this.load();
    this.loading = false;

    window.addEventListener("keydown", (event) =>
      this.handleGlobalKeyDown(event)
    );

    const allSkills = [];
    Object.keys(this.subjects)
      .slice(1)
      .map((key) => this.subjects[key])
      .forEach((subject) =>
        subject.points.forEach((point) =>
          point.skills.forEach((s) =>
            allSkills.push({
              subject: subject.id,
              grade: point.grade,
              skill: s.id,
            })
          )
        )
      );

    // this.allSkills = allSkills;
  },
  methods: {
    async load() {
      const resp = await fetch(parameters.serverAddress);
      this.candidates = await resp.json();
    },
    async save() {
      this.loading = true;

      await fetch(`${parameters.serverAddress}/${this.currentCandidate.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          ...this.currentCandidate,
          answer: JSON.stringify(this.getInfo()),
        }),
      });

      this.load();

      Notify.create({
        type: "info",
        message: "Данные сохранены",
        position: "top",
        timeout: 1_000,
      });
      this.loading = false;
    },
    activateSection(id) {
      this.currentSubject = id;
    },
    getInfo() {
      const subjects = Object.keys(this.subjects).filter(
        (id) => id !== "Candidates"
      );
      return subjects
        .map((id) => {
          const subject = this.subjects[id];
          const points = subject.points
            .filter((x) => x.skills.some((sk) => sk.value || sk.comment))
            .map((p) => ({
              grade: p.grade,
              skills: p.skills
                .filter((sk) => sk.value || sk.comment)
                .map((sk) => ({
                  id: sk.id,
                  value: sk.value,
                  comment: sk.comment,
                })),
            }));
          return {
            id,
            points,
          };
        })
        .filter((s) => s.points.length);
    },
    onCandidateSelected(candidate) {
      this.currentCandidate = candidate;

      this.subjects = interfaceModule.createSubjects();

      const infoSubjects = JSON.parse(this.currentCandidate.answer);
      if (infoSubjects) {
        infoSubjects.forEach((subject) => {
          const currentSubject = this.subjects[subject.id];

          subject.points.forEach((point) => {
            const currentPoint = currentSubject.points.find(
              (p) => p.grade === point.grade
            );

            point.skills.forEach((skill) => {
              const currentSkill = currentPoint.skills.find(
                (s) => s.id === skill.id
              );

              currentSkill.comment = skill.comment;
              currentSkill.value = skill.value;
            });
          });
        });
      }

      Notify.create({
        type: "info",
        message: "Кандидат выбран",
        position: "top",
        timeout: 1_000,
      });

      this.activeSkillIndex = 0;
    },
    onLoading(loading) {
      this.loading = loading;
    },
    focusCurrentActive() {
      this.currentSubject = this.allSkills[this.activeSkillIndex].subject;

      window.document.querySelector(".active-skill").scrollIntoView(true);
    },
    handleGlobalKeyDown(event) {
      if (!this.allSkills[this.activeSkillIndex]) return;

      if (event.code === "ArrowRight" || event.code === "ArrowLeft") {
        event.preventDefault();
        if (event.code === "ArrowRight") {
          this.activeSkillIndex =
            (this.activeSkillIndex + 1) % this.allSkills.length;
        } else {
          this.activeSkillIndex =
            this.activeSkillIndex === 0
              ? this.allSkills.length - 1
              : (this.activeSkillIndex - 1) % this.allSkills.length;
        }

        this.focusCurrentActive();
      }
    },
  },
  computed: {
    candidateNotSelected() {
      return this.currentCandidate === null;
    },
  },
  components: {
    InterviewNavigation,
    InterviewPage,
    InterviewCandidates,
    InterviewSaveButton,
  },
};
</script>
