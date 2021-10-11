<template>
  <div class="paramsitem">
    <div class="titleparams">
      <div>用户评论</div>
      <div>更多</div>
    </div>
    <div class="user" v-if="params.list">
      <img :src="params.list[0].user.avatar" alt="" />
      <div>{{ params.list[0].user.uname }}</div>
    </div>
    <div class="paramstime" v-if="params.list">
      {{ params.list[0].content }}
    </div>
    <div class="timeparasm" v-if="params.list">
      {{ time }}
    </div>
  </div>
</template>

<script>
import { timestampToTime } from "../../utils/fun-data";
export default {
  props: {
    params: Object,
  },
  computed: {
    time() {
      return timestampToTime(this.params.list[0].created);
    },
  },
};
</script>

<style lang="scss">
.paramsitem {
  .titleparams {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    padding: 0 10px 0 10px;
  }
  .user {
    display: flex;
    align-items: center;
    img {
      width: 15%;
    }
    div {
      font-weight: 600;
      font-size: 14px;
    }
  }
  .paramstime {
    font-size: 14px;
    padding: 10px 10px;
  }
  .timeparasm {
    font-size: 12px;
    padding: 5px 10px;
  }
}
</style>