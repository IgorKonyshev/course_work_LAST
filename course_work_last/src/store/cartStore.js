import { ref, computed } from "vue";

const cartItems = ref([]);

const addToCart = (product) => {
  cartItems.value.push(product);
};

const removeItem = (index) => {
  cartItems.value.splice(index, 1);
};

const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price, 0)
);

export default function useCart() {
  return {
    cartItems,
    addToCart,
    removeItem,
    totalPrice,
  };
}
