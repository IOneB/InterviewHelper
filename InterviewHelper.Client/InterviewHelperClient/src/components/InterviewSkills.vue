<template>
  <div class="row" v-for="columnsSkills in rowSkills" :key="columnsSkills">
    <div class="col row" v-for="skill in columnsSkills" :key="skill">
      <q-card
        class="m-a-md w-100"
        :class="{ 'active-skill': currentSkillActive(skill.id) }"
      >
        <q-card-section>
          <div class="row">
            <p class="col">
              {{ skill.skill }}
            </p>
            <q-btn outline round color="red" v-if="skill.how">
              ?
              <q-tooltip
                class="bg-purple text-body2"
                anchor="center left"
                self="center left"
                :offset="[-50, -50]"
              >
                <div v-html="skill.how"></div>
              </q-tooltip>
            </q-btn>
          </div>

          <div class="p-a-md" v-if="!skill.noValue">
            Значение:
            <q-select
              filled
              v-model="skill.value"
              style="max-width: 300px"
              :options="skillOptions"
            />
          </div>
          <div class="p-a-md">
            Комментарий:
            <q-input rows="2" filled type="textarea" v-model="skill.comment" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skills", "activeSkill", "currentGrade"],
  data() {
    return {
      skillOptions: ["", "-", "+", "+/-"],
    };
  },
  methods: {
    currentSkillActive(skillId) {
      return (
        this.activeSkill &&
        this.currentGrade.subject === this.activeSkill.subject &&
        this.currentGrade.grade === this.activeSkill.grade &&
        skillId === this.activeSkill.skill
      );
    },
  },
  computed: {
    rowSkills() {
      const columns = [];
      const skills = this.skills || [];

      for (let i = 0; i < skills.length; i += 1) {
        const index = Math.floor(i / 2);

        if (columns[index]) columns[index].push(skills[i]);
        else columns[index] = [skills[i]];
      }

      return columns;
    },
  },
};
</script>

<style>
.p-a-md {
  padding: 1rem;
}

.m-a-md {
  margin: 1rem;
}

.w-100 {
  width: 100%;
}

.active-skill {
  background-color: red !important;
}
</style>
