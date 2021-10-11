<template>
  <div class="homegoods">
    <HomeGoodsitem class="itemgoods" v-for="(item, index) in list" :key="index">
      <div class="goodsdetial" @click="itemClick(item.iid)">
        <img v-lazy="item.show.img" alt="" />
        <div class="titlegoods">{{ item.title }}</div>
        <span>￥{{ item.price }}</span>
        <span>{{ "收藏:" + item.cfav }}</span>
      </div>
    </HomeGoodsitem>
  </div>
</template>

<script>
import HomeGoodsitem from "./HomeGoodsitem.vue";
export default {
  props: {
    list: Array,
  }, 
  components: {
    HomeGoodsitem,
  },
  methods: {
    itemClick(iid) {
      console.log(iid);
      this.$router.push("/datail/" + iid);
    },
  },
};
</script>

<style lang="scss">
.homegoods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .itemgoods {
    width: 48%;
    .goodsdetial {
      text-align: center;

      :nth-child(2) {
        margin: 5px 0 5px 0;
      }
      :nth-child(3) {
        color: rgb(243, 62, 92);
        margin-right: 15px;
      }
    }
    img {
      width: 100%;
    }
    .titlegoods {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>