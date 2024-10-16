<script>
import Projects from './Projects.vue';
import Contact from './Contact.vue';
import About from './About.vue';
export default {
  components: {
    Projects,
    Contact,
    About
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
  <Projects/>
  <About/>
  <Contact/>
</template>

<style>
.read-the-docs {
  color: #888;
}
</style>
