<template>
  <text-block padding>
    <h1 class="text"> Experiências <br> de Trabalho </h1> <br>
    <h2 class="text"> Uma descrição sucinta das minhas experiências profissionais anteriores. </h2> <br>
    <v-btn
      x-large
      outlined>
      <nuxt-link to="/experiences">
        Veja minhas <br> Experiências
      </nuxt-link>
    </v-btn>
    <br>
  </text-block>
</template>

<script>
import TextBlock from './TextBlock'

export default {
  name: "XpSection",
  components: { TextBlock }
}
</script>

<style lang="sass" scoped>
  .text
    text-align: center

  .v-btn
    left: 30%
</style>
