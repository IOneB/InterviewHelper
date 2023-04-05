<template>
  <q-page-sticky
    :style="{ opacity: saveOpacity }"
    position="bottom-right"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
    :offset="[18, 18]"
  >
    <q-btn
      @click="$emit('save')"
      :disable="candidateNotSelected"
      round
      color="primary"
      icon="save"
    />
  </q-page-sticky>
</template>

<script>
export default {
  props: ["candidateNotSelected"],
  data() {
    return {
      saveOpacity: 0,
    };
  },
  methods: {
    onMouseOver() {
      this.saveOpacity = 1;
    },
    onMouseLeave() {
      this.saveOpacity = 0;
    },
  },
};
</script>

<style>
.q-page-sticky {
  transition: opacity 0.5s;
}
</style>
