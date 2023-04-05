<template>
  <div
    class="row"
    v-show="show"
    v-for="point in subject.points"
    :key="point.grade"
  >
    <div class="col">
      <h5>Оценка {{ point.grade }}</h5>
      <interview-skills
        :activeSkill="activeSkill"
        :currentGrade="{ subject: subject.id, grade: point.grade }"
        :skills="point.skills"
      />
      <hr />
    </div>
  </div>
</template>

<script>
import InterviewSkills from "./InterviewSkills.vue";

export default {
  props: ["subject", "show", "activeSkill"],
  components: {
    InterviewSkills,
  },
};
</script>
