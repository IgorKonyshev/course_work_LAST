<template>
  <div>
    <HeaderComponent title="Привіт" />
    <MessageComponent
      title="Привіт ще раз"
      message="Я вмію створювати компоненти із пропсами!"
    />
    <MessageComponent
      title="Що далі?"
      message="Тепер я можу передавати різні дані в компоненти!"
    />
  </div>
</template>

<script>
import MessageComponent from "./components/MessageComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
    MessageComponent,
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
