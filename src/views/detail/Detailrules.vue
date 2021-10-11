<template>
  <div class="rules" v-if="rule.rule">
    <div>
      <div class="rule" v-for="(it, i) in rule.rule.tables[0]" :key="i">
        <div v-for="(ite, inde) in it" :key="inde">
          {{ ite }}
        </div>
      </div>
    </div>

    <div class="ruleinfo">
      <div
        class="ruleinfoitem"
        v-for="(item, index) in rule.info.set"
        :key="index + 'a'"
      >
        <div>{{ item.key }}</div>
        <div>{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rule: Object,
  },
  computed: {
    tables() {
      return this.rule.rule.tables.length === 1
        ? this.rule.rule.tables
        : this.rule.rule.tables[0];
    },
  },
};
</script>

<style lang="scss">
.rules {
  margin-bottom: 30px;
  .rule {
    display: flex;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    div {
      flex: 1;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .ruleinfo {
    .ruleinfoitem {
      display: flex;
      padding: 10px 0 10px 30px;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
      :first-child {
        flex: 0.4;
      }
      :last-child {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: red;
      }
    }
  }
}
</style>