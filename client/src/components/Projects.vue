<script lang="ts">
export default {
  components: {},
  data() {
    return {
      projects: {
        "just_dance": {
          title:"Just Dance 2025, Release and Build Assistant",
          project_link: "https://www.ubisoft.com/fr-fr/game/just-dance/2025",
          stack:["Ansible", "Powershell", "Gitlab CI", "VueJS", "Docker"]
        },
        "ratp_app": {
          title: "Companion mobile RATP",
          project_link: "https://github.com/thivco/mercimetro",
          stack: ["React Native", "Expo", "TSX"]
        },
        "websocket_go": {
          title: "Pictionnary en ligne, Websocket & Go",
          project_link: "https://github.com/thivco/go_go_go",
          stack: ["Websocket", "Go", "Javascript"]
        },
        "algorithms": {
          title: "Sorting algorithm, plus grand carre et calculatrice",
          project_link: "https://github.com/thivco/algo",
          stack: ["PHP", "Algorithms"]
        },
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
  <div id="projects" class="main_section" v-for="project in projects">
    <p>Project title : {{project.title}}</p>
    <a :href="project.project_link"> Check it out on github</a>
    <p>Stack used :</p>
    <div>
      <p v-for="entry in project.stack">{{entry}}</p>
    </div>
  </div>
</template>

<style>
.read-the-docs {
  color: #888;
}
</style>
