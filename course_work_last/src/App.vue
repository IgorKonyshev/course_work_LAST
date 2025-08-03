<template>
  <div id="app">
    <SplashScreen v-if="showSplash" @enter="handleEnter" />
    <div v-else>
      <router-view></router-view>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import FooterComponent from "./components/FooterComponent.vue";

const SplashScreen = {
  template: `
    <div class="splash-screen">
      <video autoplay muted loop class="background-video">
        <source src="/guitarist.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      <div class="overlay">
        <h1>Заходи скорее!</h1>
        <p>Виртуоз гитары уже ждет тебя на сайте</p>
        <button id="button-beginning" @click="enter">Войти на сайт</button>
      </div>
    </div>
  `,
  methods: {
    enter() {
      this.$emit("enter");
    },
  },
};

export default {
  components: {
    FooterComponent,
    SplashScreen,
  },
  setup() {
    const showSplash = ref(true);

    function handleEnter() {
      showSplash.value = false;
    }

    return {
      showSplash,
      handleEnter,
    };
  },
};
</script>

<style>
#app {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100%;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
body {
  margin: 0;
  height: 100%;
}

/* Стили заставки */
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 9999;
  background: black;
  /* animation: fadeOut 0.5s ease forwards; */
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.overlay {
  position: relative;
  z-index: 2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 0 10px black;
  background: rgba(0, 0, 0, 0.4);
  padding: 20px;
  box-sizing: border-box;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
#button-beginning {
  background-color: transparent;
}
#button-beginning:hover {
  background-color: #36966e;
}
button {
  background-color: #9cdec0;
  border: none;
  padding: 15px 30px;
  font-size: 1.25rem;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #36966e;
}

/* Анимация плавного исчезания */
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}
router-view,
main {
  flex: 1;
}
</style>
