<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      observeImage: true,
      click: true,
      tap: true,
      mouseWheel: true,

      probeType: 3,

      pullUpLoad: {
        type: true,
        default: true,
      },
    });
    //实时监听滚动事件
    this.scroll.on("scroll", (posititon) => {
      this.$emit("scroll", posititon);
    });

    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
      this.scroll.finishPullUp();
    });
  },
  computed: {},
  methods: {},
};
</script>

<style>
</style>