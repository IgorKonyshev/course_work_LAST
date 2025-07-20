<template>
  <div>
    <h2>Кошик покупок</h2>
  </div>
  <p v-if="cartItems.length === 0">Кошик порожній</p>
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
