<template>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :price="product.price"
      :image="product.image"
      @add-to-cart="$emit('add-to-cart', product)"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  components: {
    ProductCard,
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
}
</style>
