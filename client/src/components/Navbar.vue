<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons';

import "primeicons/primeicons.css"

export default {
  data() {
    return {
      pages: {
        home: { title: 'Home', anchor: '#home' },
        projects: { title: "Projects", anchor: "#projects" },
        about: { title: 'About', anchor: '#about' },
        contact: { title: 'Contact', anchor: '#contact' },
        github: {title: "Github", anchor:"https://github.com/thivco"},
        // linkedin: {title: "L", anchor:"https://linkedin.com/in/thibaultviv"}
      }
    }
  },
  methods: {
  },
  mounted() {
  },
}

</script>

<template>
  <div id="navbar">
    <div v-for="page in pages">
      <a v-bind:href="page.anchor">
        {{ page.title }}
      </a>
    </div>
  </div>
</template>

<style scoped>
</style>