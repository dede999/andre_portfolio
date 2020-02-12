<template>
  <v-app-bar app color="#a1c6db" flat hide-on-scroll>
    <h1 class="the-title"> André Luiz Abdalla Silveira </h1>
    <v-spacer/>
    <v-btn large>
      <nuxt-link to="/">
        <v-icon color="teal darken-4" large>fas fa-home</v-icon>
      </nuxt-link>
    </v-btn>
    <v-btn large>
      <nuxt-link to="/projects"> Projetos </nuxt-link>
    </v-btn>
    <v-btn large>
      <nuxt-link to="/experiences"> Experiências </nuxt-link>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style lang="sass" scoped>
  .the-title
    font-family: 'Trocchi', sans-serif
    font-size: 38px

  button
    @include my_linear_gradient
    margin-left: 30px
</style>
