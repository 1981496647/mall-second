<template>
  <Tabbar class="tabbar" @click="titleClick" v-if="this.$route.path !== '/login'">
    <TabbarItem
      class="tabbaritem"
      v-for="(item, index) in tabArr"
      :key="index"
      @pushClick="pushClick(item.path, index)"
      :path="item.path"
    >
      <template v-slot:image> <img :src="item.src" alt="" /></template>
      <template v-slot:image-active> <img :src="item.src1" alt="" /></template>
      <template v-slot:text
        ><div :class="{ active: currentIndex === index }">
          {{ item.name }}
        </div></template
      >
    </TabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from "./Tabbar.vue";
import TabbarItem from "./TabbarItem.vue";
export default {
  components: {
    Tabbar,
    TabbarItem,
  },
  data() {
    return {
      currentIndex: 0,
      tabArr: [
        {
          name: "首页",
          src: require("../../assets/img/tabbar/shouye.png"),
          src1: require("../../assets/img/tabbar/shouye1.png"),
          path: "/home",
          check: true,
        },
        {
          name: "分类",
          src: require("../../assets/img/tabbar/fenlei.png"),
          path: "/classify",
          src1: require("../../assets/img/tabbar/fenlei1.png"),

          check: true,
        },
        {
          name: "购物车",
          src: require("../../assets/img/tabbar/gouwuche.png"),
          path: "/cart",
          src1: require("../../assets/img/tabbar/gouwuche1.png"),
          check: true,
        },
        {
          name: "我的",
          src: require("../../assets/img/tabbar/wode.png"),
          path: "/mine",
          src1: require("../../assets/img/tabbar/wode1.png"),
          check: true,
        },
      ],
    };
  },
  methods: {
    titleClick() {
      console.log(1);
    },
    pushClick(path, index) {
      if (path === this.$route.path) return;
      this.$router.push(path);
      this.currentIndex = index;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.tabbar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #ccc;
  box-shadow: 0 -1px 1px #ccc;
  background-color: #fff;
  z-index: 1;
  .tabbaritem {
    flex: 1;
    text-align: center;
    img {
      width: 30px;
    }
  }
  .active {
    color: red;
  }
}
</style>

