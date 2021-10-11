<template>
  <div class="cartitem" v-if="cartList">
    <div class="itemlist" v-for="(item, index) in cartList" :key="index">
      <div class="checkbox">
        <el-checkbox :value="item.checked" @change="clickChange(index)" />
      </div>

      <img :src="item.image" alt="" />
      <div class="title">
        <div class="params">
          <div>{{ item.title }}</div>
          <div>{{ item.params }}</div>
        </div>
        <div class="price-count">
          <div>￥{{ item.price }}</div>
          <div>×{{ item.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartList: Array,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    clickChange(index) {
      this.cartList[index].checked = !this.cartList[index].checked;
    },
  },
};
</script>

<style lang="scss">
.cartitem {
  position: relative;
  z-index: 0;
  .itemlist {
    display: flex;
    .checkbox {
      padding: 5px 5px;
      display: flex;
      align-items: center;
    }
    img {
      width: 20%;
      padding: 5px 0;
    }
    .title {
      padding: 10px 10px;
      display: flex;
      flex-direction: column;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      .price-count {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      .params {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        :last-child {
          font-size: 13px;
        }
        :first-child {
          font-weight: 600;
        }
      }
    }
  }
}
</style>