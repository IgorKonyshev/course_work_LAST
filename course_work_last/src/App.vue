<template>
  <div id="app">
    <HeaderComponent title="Привіт" />
    <ProductList
      name="Музичний інструмент"
      description="Якийсь опис цього інструмента"
      price="1500"
      image=""
    />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import ProductList from "./components/ProductList.vue";
export default {
  components: {
    HeaderComponent,
    ProductList,
    FooterComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
</style>
