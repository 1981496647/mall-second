<template>
  <div class="cartbottom">
    <div class="checkall">
      <el-checkbox v-model="isFlag" @change="allClick">全选</el-checkbox>
    </div>
    <div class="priceall">
      <div>合计:￥{{ price }}</div>
      <div @click="priceClick">去结算({{ checkedLength }})</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: this.isFlag,
    };
  },
  computed: {
    //逻辑分析 :  过滤出商品checked为true 的项 的长度
    checkedLength() {
      return this.$store.getters.cartList.filter((item) => item.checked).length;
    },
    isFlag: {
      get() {
        if (this.$store.getters.cartList.length === 0) return false;
        //  把选中的商品的 长度 和  cartlist总长度 对比一下  要是一样  说明商品已经全部选中了 false就说名没有全部选中
        return this.checkedLength === this.$store.getters.cartList.length;
      },
      set() {},
    },

    price() {
      const price = this.$store.getters.cartList
        .filter((item) => item.checked)
        .reduce((pre, item) => {
          return pre + item.price * item.count;
        }, 0);

      return price.toFixed(2);
    },
  },
  methods: {
    allClick() {
      //判断isflag的值 true  就是说明全选  那就点击全不选
      if (this.isFlag) {
        this.$store.getters.cartList.forEach((item) => (item.checked = false));
      } else {
        this.$store.getters.cartList.forEach((item) => (item.checked = true));
      }
    },
    priceClick() {
      if (this.checkedLength === 0) {
        this.$toast.show("未添加商品", 500);
      } else {
        this.$toast.show("支付成功", 500);
      }
    },
  },
};
</script>

<style lang="scss">
.cartbottom {
  display: flex;
  position: fixed;
  bottom: 53px;
  left: 0;
  right: 0;
  background-color: #666;
  height: 50px;
  line-height: 50px;
  .checkall {
    padding-left: 10px;
    .el-checkbox__label {
      color: black;
      padding: 0;
    }
  }
  .priceall {
    display: flex;
    flex: 1;
    div {
      text-align: center;
      font-size: 15px;
    }
    :first-child {
      flex: 1;
    }
    :last-child {
      background-color: rgb(226, 9, 82);
      color: white;
      flex: 0.5;
    }
  }
}
</style>