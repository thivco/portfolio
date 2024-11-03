<script>
export default {
  data() {
    return {
      pages: {
        // home: { title: 'Home', anchor: '#home' },
        projects: { title: "Projects", anchor: "#projects" },
        about: { title: 'About', anchor: '#about' },
        contact: { title: 'Contact', anchor: '#contact' },
        github: { title: "Github", anchor: "https://github.com/thivco" },
        project1: { title: "Just Dance", anchor: "#project1" },
        project2: { title: 'Metro App', anchor: '#project2' },
        project3: { title: 'Go Sockets', anchor: '#project3' },
        linkedin: { title: 'Linkedin', anchor: '#linkedin' },
      }
    }
  },
  methods: {},
  mounted() {
  },
}

</script>

<template>
  <div id="home" class="main_section">
    <h1 id="homepage__logo">Thibault</h1>
    <div class="homepage__logobox">
      <img class="homepage__stack_logo" src="../assets/vue.svg" alt="VueJS logo">
      <img class="homepage__stack_logo" src="https://seeklogo.com/images/H/hono-logo-85A5D1206D-seeklogo.com.png" alt="Hono logo">
      <img class="homepage__stack_logo" src="../assets/docker.svg" alt="Docker Logo">
    </div>
    <p id="homepage__subtitle">Fullstack developer, configuration</p>
    <div id="homepage">
      <!-- <div v-for="page in pages"> -->
      <a class="homepage__link" :class="page.format" v-for="page in pages" v-bind:href="page.anchor"
        :id="'homepage__' + page.title.toLowerCase().replace(/\s/g, '')"><span>{{ page.title }}</span></a>
      <!-- </div> -->
    </div>
  </div>
</template>

<style scoped></style>