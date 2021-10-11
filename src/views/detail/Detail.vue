<template>
  <div class="Detail">
    <DetailNavbar @titleClick="titleClick" ref="navbar" />
    <Scroll class="contentss" @scroll="scroll" ref="scroll">
      <DetailSwiper :imgArr="imgSwiper" />
      <DetailshopInfo :shopInfo="shopInfo" />
      <Detailrule :rule="rule" ref="rule" />
      <DetailParams :params="params" ref="params" />
      <DetailComment :list="list" ref="comment" />
    </Scroll>
    <Detailcart @cartClick="cartClick" />
  </div>
</template>

<script>
import DetailNavbar from "./DetailNavBar.vue";
import Detailcart from "./Detailcart.vue";
import DetailSwiper from "./DetailSwiper.vue";
import DetailshopInfo from "./DetailshopInfo.vue";
import { getDetail, getRecommend } from "../../network/index";
import Scroll from "../../components/content/scroll/Scroll.vue";
import Detailrule from "./Detailrules.vue";
import DetailParams from "./DetailParams.vue";
import DetailComment from "./DetailComment.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Detailcart,
    DetailNavbar,
    DetailSwiper,
    DetailshopInfo,
    Scroll,
    Detailrule,
    DetailParams,
    DetailComment,
  },
  data() {
    return {
      imgSwiper: [],
      shopInfo: {},
      rule: {},
      params: {},
      list: [],
    };
  },
  created() {
    getDetail(this.$route.params.iid).then((res) => {
      this.imgSwiper = [...res.result.itemInfo.topImages.slice(0, 4)];
      this.shopInfo = {
        ...res.result.shopInfo,
        ...res.result.itemInfo,
        ...[res.result.columns],
        ...res.result.detailInfo,
      };
      this.rule = {
        ...res.result.itemParams,
      };
      console.log(res);
      this.params = { ...res.result.rate };
    });
    getRecommend().then((res) => {
      this.list = [...res.data.list];
    });
  },

  methods: {
    ...mapActions(["add"]),

    titleClick(index) {
      const scrollY = [
        0,
        this.$refs.rule.$el.offsetTop,
        this.$refs.params.$el.offsetTop,
        this.$refs.comment.$el.offsetTop,
      ];
      this.$refs.scroll.scroll.scrollTo(0, -scrollY[index], 500);
    },
    scroll(position) {
      const scrollY = [
        0,
        this.$refs.rule.$el.offsetTop,
        this.$refs.params.$el.offsetTop,
        this.$refs.comment.$el.offsetTop,
      ];
      if (-position.y >= scrollY[0] && -position.y < scrollY[1]) {
        this.$refs.navbar.currentIndex = 0;
      } else if (-position.y > scrollY[1] - 1 && -position.y < scrollY[2]) {
        this.$refs.navbar.currentIndex = 1;
      } else if (-position.y > scrollY[2] - 1 && -position.y < scrollY[3]) {
        this.$refs.navbar.currentIndex = 2;
      } else {
        this.$refs.navbar.currentIndex = 3;
      }
    },
    cartClick() {
      const cartObj = {
        title: this.shopInfo.title,
        image: this.shopInfo.topImages[0],
        price: this.shopInfo.lowNowPrice,
        params: this.shopInfo.desc,
        iid: this.shopInfo.iid,
        count: 1,
        checked: true,
      };

      // this.$store.state.cartList.push(cartObj);
      // console.log(this.$store.state.cartList);
      // this.$store.dispatch('add',cartObj)
      this.add(cartObj).then((res) => {
        console.log(res);
        this.$toast.show(res, 500);
      });
    },
  },
};
</script>

<style lang="scss">
.detailcenter {
  display: flex;
  flex: 1;
}
.Detail {
  position: relative;
  height: 100vh;
  .contentss {
    position: absolute;
    top: 44px;
    bottom: 60px;
    left: 0;
    right: 0;
  }
}
</style>