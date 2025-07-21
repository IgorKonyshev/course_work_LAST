<template><footer>Тут типо футерн пока не знаб шо пписать</footer></template>

<script>
export default {
  name: "FooterComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
footer {
  background: rgb(114, 218, 228);
  color: white;
  padding: 15px;
  text-align: center;
}
</style>
