<template>
  <div class="detailNavbarall">
    <div class="detailNavbar">
      <div @click="backClick">
        <span class="iconfont">&#xe66f;</span>
      </div>
      <div class="detailitem">
        <div
          v-for="(item, index) in title"
          :key="index"
          @click="titleClick(index)"
          :class="{ active: currentIndex === index }"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.$emit("titleClick", index);
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss">
.detailNavbarall {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  background-color: #fff;
  .detailNavbar {
    height: 44px;
    display: flex;
    line-height: 44px;
    :first-child {
      width: 42px;
      text-align: center;
    }
    .detailitem {
      flex: 1;
      display: flex;
      justify-content: center;
      .active {
        color: red;
      }
      div {
        margin: 0 25px 0 10px;
      }
    }
  }
}
</style>