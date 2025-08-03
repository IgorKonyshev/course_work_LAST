<template>
  <div>
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
export default {
  data() {
    return {
      username: localStorage.getItem("authUser") || "",
      role: localStorage.getItem("authRole") || "",
    };
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
