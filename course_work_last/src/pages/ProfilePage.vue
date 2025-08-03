<template>
  <AdminDashboard />
  <div class="profile-container">
    <h2>Адмін-панель</h2>
    <p>Вітаємо, {{ username }}!</p>
    <p v-if="role === 'admin'">Ваша роль: Адміністратор</p>
    <p v-else-if="role === 'manager'">Ваша роль: Менеджер</p>

    <button v-if="role === 'admin'">Управління користувачами</button>
    <button v-if="role === 'admin' || role === 'manager'">
      Управління товарами
    </button>
    <button v-if="role === 'admin' || role === 'manager'">
      Перегляд замовлень
    </button>
    <button v-if="role === 'admin'">Налаштування сайту</button>

    <button v-on:click="logout">Вийти</button>
  </div>
</template>

<script>
import AdminDashboard from "./AdminDashboard.vue";

export default {
  data() {
    return {
      username: localStorage.getItem("authUser") || "",
      role: localStorage.getItem("authRole") || "",
    };
  },
  components: {
    AdminDashboard,
  },

  methods: {
    logout() {
      localStorage.removeItem("authUser");
      localStorage.removeItem("authRole");
      this.$router.push("/");
    },
  },
  beforeMount() {
    if (!this.username) {
      this.$router.push("/login");
    }
  },
};
</script>

<style>
.profile-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
