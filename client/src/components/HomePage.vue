<script>
export default {
  data() {
    return {
      pages: {
        // home: { title: 'Home', anchor: '#home' },
        projects: { title: "Projects", anchor: "#projects" },
        about: { title: 'About', anchor: '#about' },
        contact: { title: 'Contact', anchor: '#contact' },
        github: {title: "Github", anchor:"https://github.com/thivco"},
        project1: { title: "Project1", anchor: "#project1" },
        project2: { title: 'Project2', anchor: '#project2' },
        project3: { title: 'Project3', anchor: '#project3' },
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
  <h1 id="homepage__logo">Thibault QUI THIB</h1>
  <p id="homepage__subtitle">Fullstack developer, configuration</p>
  <div id="homepage">
    <!-- <div v-for="page in pages"> -->
      <a class="homepage__link" v-for="page in pages" v-bind:href="page.anchor" :id="'homepage__'+page.title.toLowerCase()">{{ page.title }}</a>
    <!-- </div> -->
  </div>
</template>

<style scoped>
  #homepage {
    font-size: 3rem;
    /* min-width: 100%; */
    margin: 0 auto;
    width: 75%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap:1rem;
  }

  #homepage > a {
    color:black;
  }

  .homepage__link {
    background: red;
    display: inline;
    vertical-align:middle;
  }


  #homepage__projects{
    grid-row: 1/3;
    grid-column: 1/4;
  }

  #homepage__about {
    grid-row: 1/3;
    grid-column: 4/6;
  }

 #homepage__contact {
    grid-row: 3/5;
    grid-column: 4;
  }

 #homepage__github {
    grid-row: 3;
    grid-column: 5;
  }

 #homepage__project1 {
    grid-row: 3/5;
    grid-column: 1;
  }

  #homepage__project2 {
    grid-row: 3/5;
    grid-column: 2;
  }
  
  #homepage__project3 {
    grid-row: 3/5;
    grid-column: 3;
  }

</style>
