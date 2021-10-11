<template>
  <div class="cartlist">
    <Cartnavbar class="navbara" />
    <Scroll class="contentsss">
      <Cartitem :cartList="cartList" />
    </Scroll>
    <Cartbottom />
  </div>
</template>

<script>
import Cartnavbar from "./Cartnavbar.vue";
import Cartitem from "./Cartitem.vue";
import { mapGetters } from "vuex";
import Cartbottom from "./Cartbottom.vue";
import Scroll from "../../components/content/scroll/Scroll.vue";
export default {

  name:'Cart',
  components: {
    Cartnavbar,
    Cartitem,
    Cartbottom,
    Scroll,
  },
  computed: {
    ...mapGetters({
      cartList: "cartList",
    }),
  },
};
</script>

<style lang="scss">
.cartlist {
  position: relative;
  height: 100vh;
  .contentsss {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100px;
    top: 50px;
  }
}
.navbara {
  position: relative !important;
}
</style>