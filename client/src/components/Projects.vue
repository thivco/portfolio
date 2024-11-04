<script lang="ts">
export default {
  components: {},
  data() {
    return {
      projects: {
        "just_dance": {
          title:"Just Dance 2025",
          project_link: "https://www.ubisoft.com/fr-fr/game/just-dance/2025",
          stack:["Ansible", "Powershell", "Gitlab CI", "VueJS", "Docker"],
          image_link:"https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70070000020804/e4d5cb36076e7fe810fcf1f5650c76b62a2db558b8ab3d6cb169c98e16be74bd",
          description:"Travail sur la pipeline du projet. Gestion et instanciation de build machines, creation d'outils internes, creation et modification de nouvelles etapes dans la pipeline.",
          git_button_text:"Just Dance",
          anchor:"justdance"
        },
        "ratp_app": {
          title: "Companion mobile RATP",
          project_link: "https://github.com/thivco/mercimetro",
          stack: ["React Native", "Expo", "TSX"],
          image_link:"https://i.ytimg.com/vi/B7zn13Qmtzg/maxresdefault.jpg",
          description:"Application en React Native utilisant l'API Ile-De-France Mobilites pour naviguer parmi les lignes existantes, selectionner ses stations favorites et acceder aux prochains passages pour les stations selectionnees.",
          git_button_text:"Github",
          anchor:"metroapp"
        },
        "websocket_go": {
          title: "Pictionnary en ligne",
          project_link: "https://github.com/thivco/go_go_go",
          stack: ["Websocket", "Go", "Javascript"],
          image_link:"https://e.snmc.io/lk/o/x/8e0c8fe9a6eabb4a5342440d7b7c38fb/8997167",
          description:"Application de pictionnary en ligne utilisant Go et les websockets.",
          git_button_text:"Github",
          anchor:"gosockets"
        },
        "algorithms": {
          title: "Algorithms",
          project_link: "https://github.com/thivco/algo",
          stack: ["PHP", "Algorithms"],
          image_link:"https://i.ytimg.com/vi/kPRA0W1kECg/maxresdefault.jpg",
          description: "Algorithmes realises en PHP vanilla.",
          git_button_text:"Github",
          anchor:"algorithms"
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
  <div id="projects" class="main_section">
    <div class="project_section" :id="project.anchor" v-for="project in projects">
      <p class="project_section__title">{{project.title}}</p>
      <!-- <a class="project_section__visit project_section__button" :href="project?.project_test"> Try it out</a> -->
      <div class="project_section__stack">
        <!-- <p>Stack used :</p> -->
        <!-- <div class="project_section__stacklist"> -->
          <p v-for="entry in project.stack">{{entry}}</p>
        <!-- </div> -->
      </div>
      <div class="project_section__description">{{ project.description }}</div>
      <!-- <img :src="project.image_link" alt=""> -->
      <a class="project_section__github project_section__button" :href="project.project_link">{{project.git_button_text}}</a>
    </div>
  </div>
</template>

<style>
.read-the-docs {
  color: #888;
}
</style>
