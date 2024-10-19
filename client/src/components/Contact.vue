<script lang="ts">
import { FormData } from "../types/FormData"

export default {
  components: {},
  data() {
    return {
      commentsData: {},
      formData: {
        email: "",
        description: "",
      } as FormData
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
        // Calling fetchComments to update the comments on submit
        this.fetchComments()
      } catch (error) {
        console.error("Something wrong happened :", error);
      }
    },
    async fetchComments() {
      try {
        const RESPONSE = await fetch("http://localhost:8585/api/comments")
        if (RESPONSE.ok) {
          console.log("Seems to be the promise in the front", RESPONSE)
          this.commentsData = await RESPONSE.json()
          console.log("Fetched comments data:", this.commentsData);
          return this.commentsData
        }
      } catch (error) {
        console.error("Error in the front when fetching comment", error);
      }
    }
  },
  mounted() {
    this.fetchComments()
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
      <ul v-if="commentsData" v-for="comment in commentsData">
        <li>{{ comment.email }} posted : <br> {{ comment.description }}</li>
      </ul>
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
