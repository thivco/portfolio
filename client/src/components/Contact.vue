<script lang="ts">
import { FormData } from "../types/FormData"
export default {
  components: {},
  data() {
    return {
      formData: {
        email: "",
        description: "",
      }
    }
  },
  methods: {
    async submitHandler() {
      try {
        const RESPONSE = await fetch("http://localhost:8585/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.formData)
        })
        const DATA = await RESPONSE.json()
        console.log("Here is the data", DATA);
        
      } catch (error) {
        console.error("Something wrong happened :", error);
        
      }
    }
  },
  mounted() {
  },
}

</script>

<template>
  <div id="contact">
    <p>Here is the contact form, feel free to contact me to give me ideas !</p>
    <p>Please</p>
    <form @submit.prevent="submitHandler">
      <!-- <form id="contactform" action="localhost:8585/api/post_comment" method="post"> -->
      <input type="email" v-model="formData.email" placeholder="Your mail adress" id="contactform__mail">
      <textarea v-model="formData.description" id="contactform__description">And here</textarea>
      <button type="submit">Submit</button>
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
