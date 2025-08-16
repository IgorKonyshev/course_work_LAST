<template>
  <div class="cart-container" @click.stop>
    <button class="cart-button" @click="toggleDropdown">🛒</button>

    <div v-if="isOpen" class="dropdown">
      <p v-if="cartItems.length === 0">Кошик порожній</p>
      <ul v-else>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - {{ item.price }} грн
        </li>
      </ul>
      <p v-if="cartItems.length > 0" class="total">
        Загалом: {{ totalPrice }} грн
      </p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import useCart from "../store/cartStore";

export default {
  setup() {
    const { cartItems, totalPrice } = useCart();
    const isOpen = ref(false);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".cart-container")) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      cartItems,
      totalPrice,
      isOpen,
      toggleDropdown,
    };
  },
};
</script>

<style scoped>
.cart-container {
  position: relative;
  display: inline-block;
}

.cart-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border: 1px solid #ccc;
  width: 250px;
  padding: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  margin-bottom: 5px;
}

.total {
  font-weight: bold;
  margin-top: 10px;
}
</style>
