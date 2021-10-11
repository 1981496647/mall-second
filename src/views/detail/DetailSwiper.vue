<template>
  <div class="white">
    <el-carousel trigger="click">
      <el-carousel-item v-for="(item, index) in imgArr" :key="index">
        <img :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    imgArr: Array,
  },
};
</script>

<style lang="scss" >
.white {
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item img {
    width: 100%;
  }
  .el-carousel__container{
    height: 300px;
  }
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .el-carousel__arrow {
    display: none;
  }
}
</style>
