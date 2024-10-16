<script lang="ts">
export default {
  components: {},
  data() {
    return {
      projects: {
        "ratp_app": {
          title: "Companion mobile RATP",
          github_link: "https://github.com/thivco/mercimetro",
          stack: ["React Native", "Expo", "TSX"]
        },
        "websocket_go": {
          title: "Pictionnary en ligne, Websocket & Go",
          github_link: "https://github.com/thivco/go_go_go",
          stack: ["Websocket", "Go", "Javascript"]
        },
        "algorithms": {
          title: "Sorting algorithm, plus grand carre et calculatrice",
          github_link: "https://github.com/thivco/algo",
          stack: ["PHP", "Algorithms"]
        }
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
  <div v-for="project in projects">
    <p>Project title : {{project.title}}</p>
    <a :href="project.github_link"> Check it out on github</a>
    <p>Stack used :</p>
    <div v-for="entry in project.stack">
      <p>{{entry}}</p>
    </div>
  </div>
</template>

<style>
.read-the-docs {
  color: #888;
}
</style>
