<script>
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
import About from '@/components/About.vue';
import HomePage from '@/components/HomePage.vue';
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
