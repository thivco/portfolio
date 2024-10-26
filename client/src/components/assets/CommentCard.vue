<script lang="ts">

export default {
props:{
    comment: {
      type: Object,
      required: true,
    },
  }, 
  data() {
    return {
    }
  },
  methods: {},
  mounted() {
    console.log(this.comment)
},
}

</script>

<template>
  <div id="comment_card">
    <p>{{ comment.email }} said:</p>
    <p>{{ comment.description }}</p>
  </div>
</template>

<style>

</style>
