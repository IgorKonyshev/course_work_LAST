<template>
  <div class="cart-container">
    <h2>Кошик покупок</h2>
    <ul v-if="cartItems.length > 0" class="cart-list">
      <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <span>{{ item.name }}</span>
        <span>{{ item.price }} грн</span>
        <button class="remove-btn" @click="removeItem(index)">✕</button>
      </li>
    </ul>
    <p v-else class="empty-cart">Кошик порожній</p>
    <p v-if="cartItems.length > 0" class="total-price">
      <b>Загальна сума:</b> {{ totalPrice }} грн
    </p>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const cartItems = inject("cartItems");
    const totalPrice = inject("totalPrice");
    const removeItem = inject("removeItem");

    return { cartItems, totalPrice, removeItem };
  },
};
</script>
<style scoped>
.cart-container {
  background: #f8fafd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(114, 218, 228, 0.1);
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
.cart-list {
  list-style: none;
  padding: 0;
  margin: 0 0 15px 0;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
}
.cart-item:last-child {
  border-bottom: none;
}
.remove-btn {
  background: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  transition: background 0.2s;
}
.remove-btn:hover {
  background: #e63946;
}
.empty-cart {
  color: #888;
  text-align: center;
  margin: 20px 0;
}
.total-price {
  text-align: right;
  font-size: 18px;
  margin-top: 10px;
}
</style>
