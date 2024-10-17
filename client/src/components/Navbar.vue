<script>
export default {
  data() {
    return {
      pages: {
        home: { title: 'Home', anchor: '#home' },
        projects: { title: "Projects", anchor: "#projects" },
        about: { title: 'About', anchor: '#about' },
        contact: { title: 'Contact', anchor: '#contact' },
        github: {title: "Github", anchor:"github.com/thivco"}
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
#navbar {
  /* padding: 1rem; */
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

a {
  color: rgb(255, 239, 196);
  background: rgb(3, 6, 14);
  padding: 1rem 1rem;
  margin: 0;
  transition: 500ms;
}

a:hover {
  background: rgb(255, 239, 196);
  color: rgb(3, 6, 14);
  transition: 500ms;

}
</style>
