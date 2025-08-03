<template>
  <AdminDashboard />
  <div class="login-page">
    <div class="login-container">
      <h2>Авторизація</h2>
      <h4>Введіть логін:</h4>
      <input v-model="username" placeholder="Логін" />
      <h4>Введіть пароль:</h4>
      <input v-model="password" type="password" placeholder="Пароль" />
      <button v-on:click="login">Увійти</button>
      <a href="">Забули пароль?</a>
      <p v-if="message" class="error">{{ message }}</p>
    </div>
  </div>
</template>

<script>
import AdminDashboard from "./AdminDashboard.vue";

export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
      users: [],
    };
  },
  components: { AdminDashboard },

  async mounted() {
    try {
      const response = await fetch("/admin.json");
      if (!response.ok) {
        throw new Error("HTTP помилка:" + response.status);
      }
      this.users = await response.json();
    } catch (error) {
      console.error("Помилка завантаження JSON:" + error);
      this.message = "Помилка сервера! Спробуйте пізніше.";
    }
  },
  methods: {
    login: function () {
      if (!this.username || !this.password) {
        this.message = "Введіть логін та пароль!";
        return;
      }

      const user = this.users.find(
        function (u) {
          return u.username === this.username && u.password === this.password;
        }.bind(this)
      );

      if (user) {
        localStorage.setItem("authUser", this.username);
        localStorage.setItem("authRole", user.role); // добавь эту строку
        this.$router.push("/profile");
      } else {
        this.message = "Невірний логін або пароль!";
      }
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: auto;
}
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
