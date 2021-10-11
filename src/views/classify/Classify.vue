<template>
  <div class="classify">
    <Scroll class="contentsssss">
      <ClassifyTitle
        :title="titleArr"
        class="classify-title"
        @titleClick="titleClick"
      />
    </Scroll>
    <Scroll class="contentssss">
      <Classifyitem :list="list" class="classify-item" />
    </Scroll>
  </div>
</template>

<script>
import ClassifyTitle from "./ClassifyTitle.vue";
import { getClassify, getClassitem } from "../../network/index";
import Classifyitem from "./Classifyitem.vue";
import Scroll from "../../components/content/scroll/Scroll.vue";
export default {
  components: {
    ClassifyTitle,
    Classifyitem,
    Scroll,
  },
  data() {
    return {
      titleArr: [],
      list: [],
    };
  },
  methods: {
    titleClick(index) {
      getClassitem(this.titleArr[index].maitKey).then((res) => {
        this.list = [...res.data.list];
      });
    },
  },
  created() {
    getClassify().then((res) => {
      this.titleArr = [...res.data.category.list];

    });
    getClassitem(3627).then((res) => {
      this.list = [...res.data.list];
    });
  },
};
</script>

<style lang="scss">
.classify {
  display: flex;

  position: relative;
  height: 100vh;
}
.contentssss {
  flex: 1;
  height: calc(100% - 55px);
}
.contentsssss {
  height: calc(100% - 55px);
  flex: 0.3;
}
</style>