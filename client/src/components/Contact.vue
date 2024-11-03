<script lang="ts">
import { FormData } from "../types/FormData"
import CommentCard from "./assets/CommentCard.vue";
// import dotenv from "dotenv";

// dotenv.config();
// TODO USE ENV VARIABLES TO DEFINE FETCH URL

export default {
  components: {CommentCard},
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
        const RESPONSE = await fetch(import.meta.env.VITE_DEFAULT_SERVER_ADRESS || "http://localhost:8585/" + "api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.formData)
        })
        const DATA = await RESPONSE.json()
        // Calling fetchComments to update the comments on submit
        this.fetchComments()
      } catch (error) {
        console.error("Something wrong happened :", error);
      }
    },
    async fetchComments() {
      try {
        // console.log( await fetch(import.meta.env.VITE_DEFAULT_SERVER_ADRESS || "http://localhost:8585/" + "api/comments"))
        const RESPONSE = await fetch(import.meta.env.VITE_DEFAULT_SERVER_ADRESS || "http://localhost:8585/" + "api/comments")
        
        if (RESPONSE.ok) {
          this.commentsData = await RESPONSE.json()
          // console.log("Fetched comments data:", this.commentsData);
          return this.commentsData
        }
      } catch (error) {
        console.error("Error in the front when fetching comment", error);
      }
    }
  },
  mounted() {
    this.fetchComments()
    console.log("Testing the adresses", import.meta.env.VITE_DEFAULT_SERVER_ADRESS);
    
  },
}

</script>

<template>
  <div id="contact" class="main_section">
    <p>Here is the contact form, feel free to contact me to give me ideas !</p>
    <p>Please</p>
    <form id="contact_form" @submit.prevent="submitHandler">
      <!-- <form id="contactform" action="localhost:8585/api/post_comment" method="post"> -->
      <input type="email" v-model="formData.email" placeholder="Your mail adress" id="contactform__mail">
      <textarea v-model="formData.description" id="contactform__description">And here</textarea>
      <button type="submit">Submit</button>
    </form>
    <ul v-if="commentsData" class="comment_cards"> 
       <CommentCard :comment="comment" v-for="comment in commentsData"/>
    </ul>
  </div>
</template>

<style>
</style>

