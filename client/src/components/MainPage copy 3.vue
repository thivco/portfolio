<script lang="ts">
export default {
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
  <p v-for="page in pages">
    Here is your page : {{ page.title }}
  </p>
</template>

<style>
.read-the-docs {
  color: #888;
}
</style>
