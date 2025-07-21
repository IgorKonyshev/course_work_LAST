<template>
  <div class="product-card">
    <img :src="image" :alt="name" class="product-image" />
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <p class="price">{{ price }} грн</p>
    <button class="buy-button" @click="handleAddToCart">Купити</button>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: {
    name: String,
    price: Number,
    image: String,
    description: {
      type: String,
      default: "Опис товару відсутній",
    },
  },
  setup(props) {
    const addToCart = inject("addToCart");

    const handleAddToCart = () => {
      const product = {
        name: props.name,
        price: props.price,
        image: props.image,
      };
      addToCart(product);
    };

    return {
      handleAddToCart,
    };
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 20px;
  width: 250px;
  border-radius: 10px;
  text-align: center;
  transition: box-shadow 0.3s;
}

.product-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 200px; /* или сколько тебе нужно */
  object-fit: cover;
  border-radius: 10px; /* если надо скругление */
}

.price {
  font-weight: bold;
  margin: 10px 0;
}

.buy-button {
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
