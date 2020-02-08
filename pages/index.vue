<template>
  <v-content>
    <v-row
      align="center"
      justify="space-around"
      class="main-row">
      <v-col cols="4">
        <text-block padding>
          <h1> Sobre Mim </h1> <br>
          <h3> <kbd>Nasc:</kbd>  17/06/1.992 </h3> <br>
          <h3> <kbd>Descrição:</kbd> Aluno se formando em Ciência da Computação. Último semestre.
            Fontes de ideias criativas, e vontade de conhecer ferramentas e oportunidades novas </h3> <br>
          <h3> <kbd>Qualidades:</kbd> Esforçado, comunicativo, responsável gosto de trabalhar
            em equipe, sinto-me motivado com desafios e oportunidades </h3> <br>
          <h3> <kbd>Interesses:</kbd> Esportes em geral, TDD (test-driven-dev), desenvolver soluções
            e facilitadores para o dia-a-dia, interdisciplinaridade </h3>
          <h3> <kbd>Ensino Médio:</kbd> Colégio Etapa (formado em 2010) </h3>
          <h3> <kbd>Ensino Superior:</kbd> Ciência da Computação (formado em 2020) </h3>
        </text-block>
      </v-col>
      <v-col cols="2">
        <img src="../static/me.png" alt="Sou eu">
      </v-col>
      <v-col cols="5">
        <text-block>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center mostra-1">Idioma</th>
                  <th class="text-center mostra-1">Fala</th>
                  <th class="text-center mostra-1">Texto</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="idiom in idiomas.data"
                  :key="idiom.pt">
                  <td class="sub-titulo"> {{ idiom.pt }}</td>
                  <td class="sub-titulo"> {{ idiom.speach_pt }}</td>
                  <td class="sub-titulo"> {{ idiom.text_pt }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </text-block>
      </v-col>
    </v-row>
    <v-row
      align="center"
      justify="space-around"
      class="main-row">
      <v-col cols="4" class="cards">
        <xp-section/>
      </v-col>
      <v-col cols="4" class="cards">
        <project-section/>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import TextBlock from '../components/TextBlock'
import XpSection from "../components/XpSection"
import ProjectSection from "../components/ProjectSection";

export default {
  components: { TextBlock, XpSection, ProjectSection },
  data() {
    return {
      idiomas: []
    }
  },
  head: {
    title: 'André Luiz - Currículo Web'
  },
  mounted() {
    this.get_languages();
    console.log(this.idiomas)
  },
  methods: {
    async get_languages() {
      await this.$axios.get('/api/lang')
        .then(response => {
          this.idiomas = response.data
        })
        .catch(err =>{
          console.log(err)
        })
    }
  }
}
</script>

<style lang="sass" scoped>

  .main-row
    margin-top: 40px

  .text-block
    margin
      top: 55px
      bottom: 55px


  h1.display-3
    font-weight: bolder

  img
    width: 240px
    height: 250px

  thead, tbody
    background-color: hsl(201, 45%, 75%)

</style>
