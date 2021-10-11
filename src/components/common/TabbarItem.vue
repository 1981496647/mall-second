<template>
  <div class="tabbaritem" @click="pushClick">
    <div v-if="isActive"><slot name="image"></slot></div>
    <div v-else><slot name="image-active"></slot></div>
    <div><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
  },
  methods: {
    pushClick() {
      this.$emit("pushClick");
    },
  },
  computed: {
    isActive() {
      return this.$route.path !== this.path;
    },
  },
};
</script>

<style>
</style>