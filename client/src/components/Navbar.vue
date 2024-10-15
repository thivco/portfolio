<script lang="ts">
export default {
  data() {
    return {
    pages : {
    home: { title: 'Home', path: '/home' },
    projects: { title : "Projects", path: "/projects"},
    about: { title: 'About', path: '/about' },
    contact: { title: 'Contact', path: '/contact' },
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
  <li v-for="page in pages">
    <ul>{{page.title}}</ul>
  </li>
</template>

<style>
li {
  list-style: none;
  background: white;
  color: black;
}

ul {
 padding: 0;
 margin: 0; 
}

</style>
