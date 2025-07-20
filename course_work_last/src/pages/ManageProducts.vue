<template>
  <div class="manage-products">
    <h1>Пошук товарів</h1>
    <input
      v-model="searchQuery"
      placeholder="Введіть назву товару"
      class="search-input"
    />

    <!-- Компонент кошика -->
    <ManageCart />

    <!-- Список товарів -->
    <ProductList :products="filteredProducts" @add-to-cart="addToCart" />
  </div>
</template>

<script>
import { ref, computed, provide } from "vue";
import ProductList from "../components/ProductList.vue";
import ManageCart from "../components/ManageCart.vue";

export default {
  components: {
    ProductList,
    ManageCart,
  },
  setup() {
    const searchQuery = ref("");

    const products = ref([
      {
        id: 1,
        name: "Смартфон Samsung Galaxy S23",
        price: 35000,
        image:
          "https://img.freepik.com/free-photo/white-cell-phone-box-background_58702-4721.jpg",
      },
      {
        id: 2,
        name: "Ноутбук Apple MacBook Air M2",
        price: 58000,
        image:
          "https://img.freepik.com/free-photo/workplace-with-laptop-stand-near-eyeglasses_23-2148040478.jpg",
      },
      {
        id: 3,
        name: "Бездротові навушники Sony",
        price: 7800,
        image:
          "https://img.freepik.com/free-photo/closeup-shot-white-wireless-headphones-with-their-case-white-background_181624-31412.jpg",
      },
      {
        id: 4,
        name: "Механічна клавіатура HyperX",
        price: 4500,
        image:
          "https://img.freepik.com/free-photo/top-view-keyboard-mouse-arrangement_23-2149386333.jpg",
      },
      {
        id: 5,
        name: "Смарт-годинник Apple Watch Series 9",
        price: 17000,
        image:
          "https://img.freepik.com/free-photo/modern-sport-adult-hand-lifestyle_1127-2745.jpg",
      },
      {
        id: 6,
        name: "Портативна колонка JBL Series 1",
        price: 5200,
        image:
          "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722602.jpg",
      },
    ]);

    const cartItems = ref([]);

    const filteredProducts = computed(() =>
      products.value.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );

    const totalPrice = computed(() =>
      cartItems.value.reduce((sum, item) => sum + item.price, 0)
    );

    const addToCart = (product) => {
      cartItems.value.push(product);
    };

    const removeItem = (index) => {
      cartItems.value.splice(index, 1);
    };

    provide("cartItems", cartItems);
    provide("totalPrice", totalPrice);
    provide("removeItem", removeItem);
    provide("addToCart", addToCart);

    return {
      searchQuery,
      filteredProducts,
      addToCart,
    };
  },
};
</script>

<style scoped>
.search-input {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
}
</style>
