<template>
  <div class="recommend">
    <div class="recommenditem" v-for="(item, index) in recommend" :key="index">
      <img :src="item.image" alt="" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import { getHome } from "../../network/index";
export default {
  data() {
    return {
      recommend: [],
    };
  },
  created() {
    getHome().then((res) => {
      this.recommend = [...res.data.recommend.list];
    });
  },
};
</script>

<style lang="scss">
.recommend {
  display: flex;
  margin: 10px 0 8px 0;
  .recommenditem {
    flex: 1;
    text-align: center;
    img {
      width: 80%;
    }
    p {
      margin: 0;
      padding: 0;

      color: #333;
      font-size: 13px;
    }
  }
}
</style>