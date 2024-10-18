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
  <div id="contact">
    <p>Here is the contact form, feel free to contact me to give me ideas !</p>
    <p>Please</p>
    <form id="contactform" action="/" method="post">
      <input type="email" name="mail" placeholder="Your mail adress" id="contactform__mail">
      <textarea name="description" id="contactform__description">And here</textarea>
      <input id="contactform__submit" type="submit" value="Send me a letter !">
    </form>
  </div>
  </template>

<style>

#contactform__submit {
  width: 10rem;
  margin: 0 auto;
}

#contactform {
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

#contact {
  margin-bottom: 100rem;
}
</style>
