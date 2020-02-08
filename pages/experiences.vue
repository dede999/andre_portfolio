<template>
  <v-content>
    <h1 class="mostra-2"> Experiências </h1>
    <p class="sub-titulo"> Veja nesta página minhas experiências de trabalho. </p>
    <v-timeline reverse>
      <v-timeline-item
        v-for="(xp, i) in exp"
        fill-dot
        :key="i"
        :color="color_picker(i)">
        <template v-slot:opposite>
          <span
            v-text="xp.term" :class="`mostra-1 font-weight-bold ${color_picker(i)}--text`">
          </span>
        </template>
        <v-card :color="`${color_picker(i)} darken-3`" dark>
          <v-card-title class="mostra-1"> {{ xp.title_pt }} </v-card-title>
          <v-card-text class="texto"> {{ xp.desc_pt }} </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-content>
</template>

<script>
export default {
  name: "experiences",
  data() {
    return {
      exp: [],
      colors: ['deep-purple', 'teal']
    }
  },
  head: {
    title: 'André Luiz - Experiências'
  },
  mounted() {
    this.fecth_experiences()
  },
  methods: {
    async fecth_experiences() {
      await this.$axios.$get('/api/experiences')
        .then(resp => { this.exp = resp.data })
        .catch(err => { console.log(err) })
    },
    color_picker(index) {
      return this.colors[index % 2];
    }
  }
}
</script>

<style lang="sass" scoped>
.texto
  @include trocchi-family(18px)
</style>
