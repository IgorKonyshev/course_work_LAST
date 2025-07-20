<template>
  <div class="product-card">
    <img :src="image" :alt="name" class="product-image" />
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <p class="price">{{ price }} грн</p>
    <button class="buy-button">Купити</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: {
      type: String,
      default: "", // Можна не передавати, тоді буде порожній
    },
    price: Number,
    image: String,
  },
};
</script>
