import { createRouter, createWebHistory } from "vue-router";
import AdminDashboard from "./pages/AdminDashboard.vue";
import LoginPage from "./pages/LoginPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import ManageProducts from "./pages/ManageProducts.vue";
import ManageReviews from "./pages/ManageReviews.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
  },
  {
    path: "/",
    component: AdminDashboard, // Використовуємо AdminDashboard як головний компонент
    children: [
      { path: "", component: ManageProducts }, // Домашня сторінка рендерить ManageProducts
      { path: "reviews", component: ManageReviews }, // Відгуки
    ],
  },
  {
    path: "/admin",
    component: AdminDashboard,
    children: [
      { path: "products", component: ManageProducts },
      { path: "reviews", component: ManageReviews },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/my-shop/"), // Вказуємо базовий шлях для GitHub Pages
  routes,
});

export default router;
