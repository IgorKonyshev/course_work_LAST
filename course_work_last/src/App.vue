<template>
  <div id="app">
    <HeaderComponent title="Привіт" />
    <ProductList
      name="Музичний інструмент"
      description="Якийсь опис цього інструмента"
      price="1500"
      image=""
    />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import ProductList from "./components/ProductList.vue";
export default {
  components: {
    HeaderComponent,
    ProductList,
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
  margin-top: 60px;
}
</style>
