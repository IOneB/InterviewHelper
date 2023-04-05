<template>
  <q-drawer v-model="drawerLeft" elevated>
    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item
          clickable
          v-ripple
          :active="subject.id === currentSubject"
          @click="activate(subject.id)"
          v-for="subject in subjects"
          :key="subject.id"
        >
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>

          <q-item-section> {{ subject.title }} </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
export default {
  props: ["subjects", "currentSubject"],
  data() {
    return {
      drawerLeft: true,
      activeId: "",
    };
  },
  methods: {
    activate(id) {
      this.$emit("activate", id);
    },
  },
};
</script>
