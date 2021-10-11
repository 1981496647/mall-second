<template>
  <div class="block">
    <el-carousel trigger="click" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="(item, index) in bannar" :key="index">
        <img ref="bannerHeight" :src="item.image" alt="" @load="imageLoad" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getHome } from "../../network/index";
export default {
  data() {
    return {
      bannar: [],
      bannerHeight: 0,
    };
  },
  methods: {
    imageLoad() {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[1].height;
      });
    },
  },
    created() {
    getHome().then((res) => {
      this.bannar = [...res.data.banner.list];
    });
  },
};
</script>

<style lang="scss">
.block {
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item img {
    width: 100%;
  }
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .el-carousel__arrow {
    display: none;
  }
  .el-carousel__container {
    height: 204.49px;
  }
}
</style>