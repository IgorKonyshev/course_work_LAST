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

<style>
.product-card {
  width: 250px;
  height: auto;
  border: 1px solid #ccc;
  padding: 15px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-image {
  width: 100%;
  height: 200px; /* 👈 Встановлюємо фіксовану висоту */
  object-fit: cover; /* 👈 Зображення обрізається красиво */
  border-radius: 6px;
  margin-bottom: 10px;
}

.price {
  font-weight: bold;
  margin: 10px 0;
  color: #2c3e50;
}

.buy-button {
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
}

.buy-button:hover {
  background-color: #27ae60;
}
</style>
