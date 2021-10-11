<template>
  <div id="app">
    <div id="nav">
      <MineBar  />
    </div>
    <router-view />
  </div>
</template>

<script>
import MineBar from "./components/common/MineBar.vue";
export default {

  components: {
    MineBar,
  },
  data() {
    return {};
  },
};
</script>
<style>
@import "./assets/css/normalize.css";
body {
  margin: 0;
}
</style>