<template>
    <v-content class="proj-comp">
      <v-container>
        <h2 class="mostra-2"> Projetos </h2>
        <h2 class="sub-titulo">
          Uma descrição sucinta dos projetos e repositórios mais relevantes em que trabalhei <br>
          Os projetos estão agrupados por conjuntos de habilidades. <br> 
          Mais abaixo está uma lista de outras ferramentas com que tenho alguma familiaridade
        </h2>
      </v-container>
      <v-row>
        <v-col cols="3"> <h2 class="sub-titulo titulo"> Habilidades </h2> </v-col>
        <v-col cols="3"> <h2 class="sub-titulo titulo"> Projetos </h2> </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-btn
            large
            outlined
            class="ruby"
            @click="chosen=['ruby']">
            <v-icon left>fas fa-gem</v-icon>
            Ruby
          </v-btn><br>
          <v-btn
            large
            outlined
            class="python"
            @click="chosen=['python']">
            <v-icon left>fab fa-python</v-icon>
            Python
          </v-btn><br>
          <v-btn
            large
            outlined
            class="web"
            @click="chosen=['html', 'css', 'js']">
            <v-icon left>fas fa-window-maximize</v-icon>
            Desenvolvimento Web
          </v-btn><br>
          <v-btn
            large
            outlined
            class="others"
            @click="chosen=['awk', 'latex']">
            <v-icon left>fas fa-laptop-code</v-icon>
            Outras
          </v-btn>
        </v-col>
        <v-col cols="3">
          <div class="project-list">
            <div v-for="item in filtered" :key=item.id class="project-list-item">
              <p
                @click="chosen_project_id = item.id">
                <v-icon small class="icon-placement">fas fa-window-minimize</v-icon>
                <span style="color: #1A237E"> {{ item.title_pt }} </span>
                <v-icon small class="icon-placement">fas fa-window-minimize</v-icon>
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="5">
          <project-show
            class="child"
            v-if="chosen_project_id > 0"
            :project="projects[chosen_project_id-1]" />
        </v-col>
      </v-row>
      <v-container>
        <h2 class="sub-titulo"> Outras ferramentas conhecidas </h2>
        <v-row>
          <v-col
            v-for="(tool, i) in ferramentas" :key="i">
            <span> {{ tool }} </span>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
const funcs = require('../plugins/project_filter_plugin')
import ProjectShow from '../components/ProjectShow'

export default {
  name: "projects",
  components: { ProjectShow },
  data() {
    return {
      projects: [],
      filtered: [],
      chosen: [],
      chosen_project_id: -1,
      ferramentas: []
    }
  },
  head: {
    title: 'André Luiz - Projetos'
  },
  mounted() {
    this.pega_projetos()
    this.pega_ferramentas()
  },
  methods: {
    filtra_projetos() {
      this.filtered = this.projects.filter(proj => funcs.projetos_escolhidos(proj, this.chosen))
    },
    async pega_projetos() {
      await this.$axios.$get('/api/projects')
        .then(resp => {
          this.projects = resp.data
          this.filtered = resp.data
        })
        .catch(err => { console.log(err) })
    },
    async pega_ferramentas() {
      await this.$axios.$get('/api/tools')
        .then(resp => {
          this.ferramentas = resp.data
        })
        .catch(err => { console.log(err) })
    }
  },
  watch: {
    'chosen'(val) {
      if (val) { this.filtra_projetos() }
    }
  }
}
</script>

<style lang="sass" scoped>
$ruby-color: #FF0033
$python-color: hsl(132, 64%, 24%)
$web-color: hsl(28, 87%, 45%)
$others-color: hsl(230, 90%, 45%)

=spacer($space)
  margin-top: 1.75em
  margin-bottom: 1.75em
  justify-content: space-around
  margin-left: $space


.proj-comp
  @include trocchi-family(default)

.ruby
  +spacer(4.65em)
  border-color: $ruby-color
  color: $ruby-color

.python
  +spacer(4em)
  border-color: $python-color
  color: $python-color

.web
  +spacer(0em)
  border-color: $web-color
  color: $web-color

.others
  +spacer(4.5em)
  border-color: $others-color
  color: $others-color

.titulo
  margin-left: 2.5em

.col-3
  align-content: center
  margin-left: 2.5em

.project-list-item
  margin: .75em
  a
    text-decoration: none
    color: hsl(240, 100%, 30%)
    text-align: center

.child
  +negative_neumorphism
  +trocchi-family(default)
  border-radius: 25px
  padding: 20px

.icon-placement
  padding: 0em .25em 1.1em .25em
  color: hsl(230, 90%, 25%)

.container
  margin-bottom: .5em
</style>
