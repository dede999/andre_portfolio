<template>
  <v-app>
    <the-header/>
    <img src="../assets/Exclude.png" style="height: 175px" alt="">
    <nuxt/>
    <the-footer/>
  </v-app>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheFooter from '../components/TheFooter'

export default {
  components: { TheHeader, TheFooter },
  data () {
    return {
    }
  }
}
</script>

<style lang="sass">

.v-application--wrap
  background-color: #a1c6db

a.nuxt-link-exact-active.nuxt-link-active
  color: black
  text-decoration: none

img
  margin-top: 65px

button.v-btn
  border-color: hsl(220, 50%, 20%)
  span.v-btn__content
    a
      text-decoration: none
      color: hsl(220, 50%, 20%)
</style>
