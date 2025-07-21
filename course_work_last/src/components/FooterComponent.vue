<template>
  <footer class="footer">
    <p>&copy; {{ new Date().getFullYear() }} My Shop. Усі права захищено.</p>
    <p>Зв'яжіться з нами: support@myshop.com</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  background: rgb(114, 218, 228);

  color: white;
  padding: 20px;
  text-align: center;
  font-size: 14px;
  border-top: 2px solid #42b983;
  margin-top: auto;
}
</style>
