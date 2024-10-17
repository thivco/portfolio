<script>
import Projects from './Projects.vue';
import Contact from './Contact.vue';
import About from './About.vue';
import HomePage from "./HomePage.vue"
export default {
  components: {
    Projects,
    Contact,
    About,
    HomePage
  },
  data() {
    return {
    }
  },
  methods: {},
  mounted() {
  },
}

</script>

<template>
  <HomePage />
  <Projects />
  <About />
  <Contact />
</template>

<style>
.read-the-docs {
  color: #888;
}
</style>
