<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img style="height: 150px" :src="product.img" />
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr />
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <span>{{ product.price | price }}</span>
      <button
        @click="addOne(product)"
        class="btn btn-primary btn-sm float-right"
      >
        Commander
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["product"],
  methods: {
    ...mapMutations("cart", ["addOne"]),
  },
};
</script>

<style>
.product-container {
  height: 400px;
}
</style>