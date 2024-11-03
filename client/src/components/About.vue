<script lang="ts">
export default {
  components: {},
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  },
}

</script>

<template>
  <div id="about"  class="main_section"  >
    <div id="about__description">
      <p>Bonjour, moi c'est Thibault. Je fais des sites web, de leur conception a leur déploiement.</p>
      <p>En termes de technologies, j'ai une préférence / expérience avec Javascript, j'utilise principalement VueJS; j'ai fait quelques projets en utilisant Express/Hono. J'ai aussi pu travailler sur la CI/CD de quelques projets lors de mon alternance : la CI Gitlab, Docker, Ansible. Ce qui m'intéresserait : une opportunité, des missions pour en apprendre plus sur les outils que je connais, et connaître plus de ces outils.
</p>
      </div>
      <a href="../../resume_tvivier.pdf" download="thibault_vivier_resume">Download CV</a>
      <!-- <div id="about__pictures">
      </div> -->
  </div>
</template>

<style>
#about {
  display: flex;
}

#about__description > p {
  text-align: left;
}
</style>
