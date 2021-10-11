<template>
  <div v-if="list" class="comment">
    <HomeGoodsitem class="goodsitem" v-for="(item, index) in list" :key="index">
      <div class="image">
        <img v-lazy="item.image" alt="" />
        <div class="title">{{ item.title }}</div>
        <div class="price">
          <span>￥{{ item.discountPrice }}</span>
          <span>收藏:{{ item.cfav }}</span>
        </div>
      </div>
    </HomeGoodsitem>
  </div>
</template>

<script>
import HomeGoodsitem from "../home/HomeGoodsitem.vue";
export default {
  props: {
    list: Array,
  },
  components: {
    HomeGoodsitem,
  },
};
</script>

<style lang="scss">
.comment {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .goodsitem {
    width: 48%;
    img {
      width: 100%;
    }
    .image {
      .title {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .price {
        margin: 10px 0;
        :first-child {
          color: rgb(236, 17, 171);
          padding: 0 10px;
        }
        :last-child {
          font-size: 15px;
        }
      }
    }
  }
}
</style>