<template>
  <div class="classifyitem-a" v-if="list[0]">
    <div v-for="(item, index) in list" :key="index">
      <img v-lazy="item.image" alt="" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
};
</script>

<style lang="scss">
.classifyitem-a {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  div {
    width: 40%;
    padding: 10px 0;
    img {
      width: 100%;
    }
  }
  p {
    text-align: center;
    margin: 0;
  }
}
</style>