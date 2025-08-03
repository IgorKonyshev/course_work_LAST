<template>
  <h2>Відгуки</h2>
  <table class="reviews-table">
    <thead>
      <tr class="reviews-header">
        <th>Ім'я</th>
        <th>Рейтинг</th>
        <th>Коментар</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(rewiew, index) in reviews" :key="index">
        <td>{{ rewiew.Name }}</td>
        <td>{{ rewiew.Rating }}</td>
        <td>{{ rewiew.Comment }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Papa from "papaparse";
export default {
  data() {
    return {
      reviews: [],
    };
  },
  created() {
    const csvContent = `Name,Rating,Comment
Іван,5,Дякую за швидку доставку
Ольга,5,Все супер! Буду замовляти ще
Андрій,5,Обслуговування, як завжди - на висоті
Марина,4,Все чудово! Покупкою задоволена, але коробка була прим'ята.
Сергій,5,Рекомендую цей чудовий магазин усім!
Данило,5,Дуже демократичні ціни. Я завжди купую лише тут.
Матвій,5,Дякую за подарунок до покупки - завжди радуєте приємними сюрпризами.
Анна,5,Дякую за чудові знижки
Раймонд,4,Як завжди все кльово, але малий термін гарантії для годинника, хотілося б довше.`;

    Papa.parse(csvContent.trim(), {
      header: true,
      complete: (result) => {
        this.reviews = result.data; // Зберігаємо розпарсені дані
      },
    });
  },
};
</script>

<style>
.reviews-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 4px solid #e0e0e0;
  gap: 10px;
}
.reviews-header {
  background-color: #f0f0f0;
  font-weight: bold;
}
.reviews-header th {
  padding: 10px;
  border: 1px solid #e0e0e0;
}
.reviews-table td {
  padding: 10px;
  border: 1px solid #e0e0e0;
}
.reviews-table tr:nth-child(even) {
  background-color: #f9f9f9;
}
.reviews-table tr:hover {
  background-color: #f1f1f1;
}
.reviews-table th,
.reviews-table td {
  text-align: left;
  vertical-align: top;
}
</style>
