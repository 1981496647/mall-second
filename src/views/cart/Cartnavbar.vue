<template>
  <Navbar>
    <template v-slot:center>
      <div>购物车({{ cart.length }})</div>
    </template>
  </Navbar>
</template>

<script>
import { mapGetters } from "vuex";
import Navbar from "../../components/content/NavBar.vue";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters({
      cart: "cartList",
    }),
  },
};
</script>

<style>
</style>