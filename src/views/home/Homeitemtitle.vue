<template>
  <div class="itemtitle">
    <div v-for="(item, index) in title" :key="index">
      <span
        @click="titleClick(index)"
        :class="{ active: currentIndex === index }"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: Array,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
  },
};
</script>

<style lang="scss">
.itemtitle {
  display: flex;
  height: 44px;
  line-height: 44px;
  div {
    flex: 1;
    text-align: center;
  }
  .active {
    border-bottom: 2px solid red;
  }
}
</style>