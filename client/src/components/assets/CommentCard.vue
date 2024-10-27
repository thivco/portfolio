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
},
}

</script>

<template>
  <div class="comment_card">
    <p>{{ comment.email }} said:</p>
    <p>{{ comment.description }}</p>
  </div>
</template>

<style>
.comment_card{
  background-color: aliceblue;
  color:rgb(26, 26, 26);
  text-align: left;
}
</style>
