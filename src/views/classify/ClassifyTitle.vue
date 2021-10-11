<template>
  <div class="classifytitle" v-if="title[0]">
    <div
      class="titleitem"
      :class="{ acivetitle: currentIndex === index }"
      v-for="(item, index) in title"
      :key="index"
      @click="titleClick(index)"
    >
      {{ item.title }}
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
.classifytitle {
  background-color: #ccc;
  border: 1px solid #ccc;
  .acivetitle {
    background-color: white;
    color: red;
  }
}
.titleitem {
  padding: 15px 0px;
  text-align: center;
  border-bottom: 1px solid #fff;
}
</style>