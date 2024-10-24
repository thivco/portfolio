<script lang="ts">
import { DefineProps } from 'vue';

const props = defineProps<{
    comment: Comment;
}>()

export default {
// props:{
//     comment:{},
// },
  data() {
    return {
    }
  },
  methods: {},
  mounted() {
    console.log(comment)
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
