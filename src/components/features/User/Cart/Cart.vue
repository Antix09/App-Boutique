<template>
  <cart-products-list :cart="cart" class="p-3"></cart-products-list>
</template>

<script>
import CartProductsList from "./CartProductsList";

export default {
  props: ["cart"],
  components: {
    CartProductsList,
  },
};
</script>

<style>
</style>