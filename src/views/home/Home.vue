<template>
  <div class="home">
    <NavBar class="navbar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
      <template v-slot:right>
        <div @click="loginBack">退出登录</div>
      </template>
    </NavBar>
    <Homeitemtitle
      class="itemtitlelook isShow"
      :title="title"
      @titleClick="titleClick"
      v-show="isShow"
      ref="homeitemtitle"
    />
    <Scroll class="contents" @scroll="scrollClick" @pullingUp="pullingUp">
      <HomeSwiper class="swiper" />
      <HomeRecommend />
      <HomeImages />

      <Homeitemtitle
        class="itemtitlelook"
        :title="title"
        @titleClick="titleClick"
        ref="hometitle"
      />
      <HomeGoods :list="itemList[currentType].list" />
    </Scroll>
  </div>
</template>

<script>
import HomeSwiper from "./HomeSwiper.vue";
import NavBar from "../../components/content/NavBar.vue";
import HomeRecommend from "./HomeRecommend.vue";
import HomeImages from "./HomeImages.vue";
import Scroll from "../../components/content/scroll/Scroll.vue";
import Homeitemtitle from "./Homeitemtitle.vue";
import { getHomeList } from "../../network/index";
import HomeGoods from "./HomeGoods.vue";
export default {
  components: {
    HomeSwiper,
    NavBar,
    HomeRecommend,
    HomeImages,
    Scroll,
    Homeitemtitle,
    HomeGoods,
  },
  methods: {
    loginBack(){
      window.sessionStorage.clear()
      this.$router.push("/login")
  },
    scrollClick(position) {
      const positionY = -position.y;
      this.isShow = positionY >= this.$refs.hometitle.$el.offsetTop;
    },
    pullingUp() {
      this.getHomeListFun(this.currentType);
    },
    getHomeListFun(type) {
      const page = this.itemList[type].page + 1;
      getHomeList(type, page).then((res) => {
        const list = this.itemList[type].list;
        this.itemList[type].list = [...list, ...res.data.list];
        this.itemList[type].page += 1;
      });
    },
    titleClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.homeitemtitle.currentIndex = index;
      this.$refs.hometitle.currentIndex = index;
    },
  },
  data() {
    return {
      isShow: false,
      title: ["流行", "新款", "精选"],
      itemList: {
        pop: { list: [], page: 0 },
        new: { list: [], page: 0 },
        sell: { list: [], page: 0 },
      },
      currentType: "pop",
    };
  },
  created() {
    this.getHomeListFun("pop");
    this.getHomeListFun("new");
    this.getHomeListFun("sell");
  },
};
</script>

<style lang="scss">
.navbar {
  background-color: pink;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.home {
  height: 100vh;

  position: relative;
  .contents {
    position: absolute;
    top: 44px;
    bottom: 55px;
    left: 0;
    right: 0;
  }
}

.isShow {
  position: fixed;
  top: 42px;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #fff;
}
</style>