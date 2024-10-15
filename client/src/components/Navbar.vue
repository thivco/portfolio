<script lang="ts">
export default {
  data() {
    return {
      pages: {
        home: { title: 'Home', anchor: '#home' },
        projects: { title: "Projects", anchor: "#projects" },
        about: { title: 'About', anchor: '#about' },
        contact: { title: 'Contact', anchor: '#contact' },
      }
    }
  },
  methods: {},
  mounted() {
  },
}

</script>

<template>
  <p>Hello navbar</p>
  <div id="navbar">
    <div v-for="page in pages">
      <a v-bind:href="page.anchor">{{ page.title }}</a>
    </div>
  </div>
</template>

<style>
#navbar {
  padding: 1rem;
  list-style: none;
  background: white;
  color: black;
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

ul {
  padding: 0;
  margin: 0;
}
</style>
