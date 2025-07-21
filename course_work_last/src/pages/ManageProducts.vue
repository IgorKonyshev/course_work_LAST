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
        name: "Электрогитара Schecter Sun Valley SS Exotic HT Black Limba NS",
        price: 76927,
        image:
          "https://guitarhouse.com.ua/content/images/26/576x1800l80mc0/elektrohitara-schecter-sun-valley-ss-exotic-ht-black-limba-ns-69324944950565.webp",
      },
      {
        id: 2,
        name: "Синтезатор Korg EK-50",
        price: 18900,
        image:
          "https://monkeymusic.ua/image/cache/catalog/pimcore/korg-ek-50-1100x1100.jpg",
      },
      {
        id: 3,
        name: "Укулеле Kala Makala Concert Ukulele",
        price: 2873,
        image:
          "https://monkeymusic.ua/image/cache/catalog/pimcore/kala-makala-concert-1100x1100.jpg",
      },
      {
        id: 4,
        name: "Аналоговый микшер 4all Audio AK4",
        price: 2360,
        image:
          "https://showtechnica.com.ua/image/cache/catalog/foto_tovarov/new-folder/86236-1200x1200.jpg",
      },
      {
        id: 5,
        name: "Рояль Yamaha С1 (Polished White)",
        price: 1599860,
        image:
          "https://guitarhouse.com.ua/content/images/2/400x484l80mc0/roial-yamaha-s1-polished-white-73799510756791.webp",
      },
      {
        id: 6,
        name: "Бас-гитара YAMAHA TRBX-174",
        price: 12702,
        image:
          "https://guitarhouse.com.ua/content/images/8/1600x1600l80mc0/bas-gitara-yamaha-trbx-174-black-26206771319788.webp",
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
