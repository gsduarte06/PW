<template></template>

<script>
import { useProductsStore } from "../stores/API";
export default {
  data() {
    return {
      productStore: useProductsStore(),
    };
  },
  props: {
    products: {
      type: Array,
    },
  },
  created() {
    this.products = useProductsStore().getAllProducts();
    console.log(this.products);
  },
};
</script>

<style lang="scss" scoped></style>
