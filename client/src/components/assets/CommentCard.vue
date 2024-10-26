<script lang="ts">

export default {
props:{
    comment: {
      type: Object as () => { email: string; description: string },
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
    <p>{{ comment.email }}</p>
  </div>
</template>

<style>

</style>
