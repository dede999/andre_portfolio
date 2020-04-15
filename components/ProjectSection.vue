<template>
  <text-block padding>
    <h1 class="text"> Projetos </h1> <br>
    <h2 class="text">Uma descrição sucinta de projetos e repositórios que criei ou contribui <br>
      Filtre os projetos de acordo com a ferramenta de interesse.
    </h2> <br>
    <v-btn
      x-large
      outlined>
      <nuxt-link to="/projects">
        Veja os <br> Projetos
      </nuxt-link>
    </v-btn>
    <br>
  </text-block>
</template>

<script>
  import TextBlock from './TextBlock'

  export default {
    name: "ProjectSection",
    components: {TextBlock}
  }
</script>

<style scoped lang="sass">
    .text
      text-align: center

</style>
