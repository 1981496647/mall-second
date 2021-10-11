<template>
  <div class="navbar">
    <div><slot name="left"></slot></div>
    <div><slot name="center"></slot></div>
    <div><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  z-index: 3;
  div {
    flex: 1;
    text-align: center;
  }
}
</style>