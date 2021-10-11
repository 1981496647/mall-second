<template>
  <div class="shopinfo">
    <!-- 标题 -->
    <div class="titleinfo">{{ shopInfo.title }}</div>

    <!-- 价格和折扣 -->
    <div class="price">
      <div class="newprice">{{ shopInfo.price }}</div>
      <div class="oldPrice">{{ shopInfo.oldPrice }}</div>
      <div class="discountDesc">{{ shopInfo.discountDesc }}</div>
    </div>

    <!-- 销量 收藏 发货 -->
    <div class="columns">
      <div v-for="(item, index) in shopInfo[0]" :key="index">{{ item }}</div>
    </div>
    <!-- 担保 -->
    <div class="services">
      <div
        class="servicesfor"
        v-for="(item, index) in shopInfo.services"
        :key="index"
      >
        <div class="servicesitem">
          <img :src="item.icon" alt="" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <!-- 店铺信息 -->
    <div class="shop">
      <!-- 展示店铺logo 名字  总销量 -->
      <div class="logo-columns flex-store">
        <div class="logo">
          <img :src="shopInfo.shopLogo" alt="" /> {{ shopInfo.name }}
        </div>
        <div class="all-columns">
          <div>
            <p>{{ scell }}</p>
            总销量
          </div>
          <div>
            <p>{{ shopInfo.cGoods }}</p>
            全部宝贝
          </div>
        </div>
      </div>
      <div class="shop-score flex-store">
        <div v-for="(item, index) in shopInfo.score" :key="index">
          <div class="score">
            <div>{{ item.name }}</div>
            <div>{{ item.score }}</div>
            <div>
              <span
                :style="{ background: item.score >= 5 ? 'green' : 'red' }"
                style="color: white; display: block; width: 20px"
                >{{ item.score >= 5 ? "高" : "低" }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-shop">
      <button>进店逛逛</button>
    </div>
    <!-- 描述信息 -->
    <div class="descinfo">
      <div></div>
      <div>{{ shopInfo.desc }}</div>
      <div></div>
    </div>

    <div style="margin-top: 20px">穿着效果</div>
    <div class="detailimg">
      <div v-for="(item, index) in shopInfo.detailImage" :key="index">
        <div v-for="(ite, ind) in item.list" :key="ind + 'a'">
            <img :src="ite" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { num } from "../../utils/fun-data";
export default {
  props: {
    shopInfo: Object,
  },

  computed: {
    scell() {
      return num(this.shopInfo.cSells);
    },
  },
};
</script>

<style lang="scss">
.shopinfo {
  .btn-shop {
    margin-top: 10px;
    text-align: center;
    button {
      outline: none;
      border: none;
      background-color: rgb(110, 108, 108);
      padding: 5px 15px;
      font-size: 14px;
    }
  }
  .titleinfo {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .price {
    display: flex;
    align-items: flex-end;
    margin-bottom: 14px;
    div {
      margin-right: 10px;
    }
    .newprice {
      color: rgb(250, 12, 191);
      font-size: 17px;
      font-weight: 600;
    }
    .oldPrice {
      font-size: 14px;
      color: #cccccccc;
      text-decoration: line-through;
    }
    .discountDesc {
      background-color: rgb(250, 12, 191);
      color: white;
      font-weight: 600;
      padding: 2px;
      border-radius: 5px;
      font-size: 13px;
      margin-bottom: 4px;
    }
  }
  .columns {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    div {
      font-size: 13px;
      color: #cccccc;
    }
  }
  .services {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .servicesfor {
      .servicesitem {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        img {
          width: 15px;
        }
      }
    }
  }
  .shop {
    display: flex;
    margin-top: 20px;
    .flex-store {
      flex: 1;
    }
    .logo-columns {
      .logo {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        img {
          width: 35px;
          margin-right: 14px;
        }
      }
      .all-columns {
        display: flex;
        justify-content: space-around;
        text-align: center;
        p {
          margin: 0;
        }
      }
    }
    .shop-score {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .score {
        display: flex;
        :first-child {
          flex: 1;
        }
        :nth-child(2) {
          flex: 1;
        }
        div {
          text-align: center;
          margin: 2px 2px 0 0;
          font-size: 16px;
        }
      }
    }
  }
  .descinfo {
    margin-top: 20px;
    :first-child,
    :last-child {
      width: 30%;
      height: 2px;
      background-color: black;
      margin: 5px 0 5px 0;
    }
    :nth-child(2) {
      font-size: 14px;
    }
    :last-child {
      margin-left: 70%;
    }
  }
  .detailimg {
    div {
      img {
        width: 100%;
      }
    }
  }
}
</style>