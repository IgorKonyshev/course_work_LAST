<template>
  <div>
    <nav class="header">
      <img class="Losyash" src="/Лосяш.png" alt="losyash" />
      <router-link to="/admin/products">
        <button class="button-header">Головна</button></router-link
      >
      <router-link to="/admin/reviews"
        ><button class="button-header">Відгуки</button></router-link
      >
      <router-link to="/login">Особистий кабінет</router-link>
    </nav>
    <main><router-view /></main>
  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
};
</script>
<style>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background: rgb(114, 218, 228);
  height: 70px;
}
a {
  text-decoration: none;
}
.button-header {
  background: rgb(205, 219, 220);
  border-radius: 4px;
  font-size: 20px;
}
:hover.button-header {
  background-color: rgb(80, 226, 136);
}
:active.button-header {
  background-color: green;
}
.Losyash {
  width: 90px;
  border-radius: 4px;
}
</style>
