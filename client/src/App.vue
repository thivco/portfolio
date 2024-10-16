<script>

import { defineComponent } from 'vue';
import MainPage from './components/MainPage.vue';
import Navbar from './components/Navbar.vue';
export default defineComponent({
  components: {
    MainPage,
    Navbar
  }
})
</script>

<template>
  <Navbar/>
  <MainPage/>
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

* {
  scroll-behavior: smooth;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
