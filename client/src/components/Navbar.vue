<script>
export default {
  data() {
    return {
      pages: {
        home: { title: 'Home', anchor: '#home' },
        projects: { title: "Projects", anchor: "#projects" },
        about: { title: 'About', anchor: '#about' },
        contact: { title: 'Contact', anchor: '#contact' },
        github: {title: "Github", anchor:"https://github.com/thivco"}
      }
    }
  },
  methods: {},
  mounted() {
  },
}

</script>

<template>
  <div id="navbar">
    <div v-for="page in pages">
      <a v-bind:href="page.anchor">{{ page.title }}</a>
    </div>
  </div>
</template>

<style scoped>
</style>
