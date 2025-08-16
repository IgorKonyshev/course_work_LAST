<template>
  <div class="product-card">
    <img :src="image" :alt="name" class="product-image" />
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <p class="price">{{ price }} грн</p>
    <button class="buy-button" @click="$emit('add-to-cart')">В корзину</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    image: String,
    description: String,
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #ddd;
  padding: 20px;
  width: 250px;
  border-radius: 10px;
  text-align: center;
  transition: box-shadow 0.3s;
  height: 100%; /* чтобы все карточки были одинаковой высоты */
  min-height: 502.24px;
}

.product-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: #fff;
}

.price {
  font-weight: bold;
  margin: 10px 0;
}

.buy-button {
  margin-top: auto; /* Кнопка всегда внизу карточки */
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.buy-button:hover {
  background-color: #36966e;
}
</style>
