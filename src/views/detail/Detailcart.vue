<template>
  <div class="detailcart">
    <div class="icon-active">
      <div class="firstchild">
        <span class="iconfont icona">&#xe601;</span>
        <p>客服</p>
      </div>
      <div>
        <span class="iconfont icona">&#xe629;</span>
        <p>店铺</p>
      </div>
      <div>
        <span class="iconfont icona">&#xe62a;</span>
        <p>收藏</p>
      </div>
    </div>
    <div class="cart">
      <div @click="cartClick">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cartClick() {
      this.$emit('cartClick')
    },
  },
};
</script>

<style lang="scss">
.detailcart {
  height: 55px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  display: flex;
  p {
    margin: 0;
    font-size: 14px;
  }
  .icon-active {
    flex: 1;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    .firstchild {
      color: red;
    }

    .icona {
      font-size: 25px;
    }
  }
  .cart {
    flex: 1;
    display: flex;

    :first-child {
      flex: 1;
      background-color: yellow;
      text-align: center;
      line-height: 50px;
    }
    :last-child {
      flex: 1;
      background-color: pink;
      text-align: center;
      line-height: 50px;
      color: white;
      font-weight: 700;
    }
  }
}
</style>