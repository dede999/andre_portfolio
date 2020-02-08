<template>
	<v-chip
		class="my-chip"
		:color="`${my_tag.color}`">
		<v-avatar 
			left
			class="white--text" 
			:color="`${my_tag.color} darken-4`">
			{{ tag }}
		</v-avatar>
		{{ my_tag.title }}
	</v-chip>
</template>

<script>
export default {
	props: {
		tag: {
		  type: String,
      required: true
    }
	},
	data() {
		return {
			tags: {
				'A': {
					title: 'Acadêmico',
					color: 'blue'
				},
				'P': {
					title: 'Pessoal',
					color: 'teal'
				},
				'U': {
					title: 'Utilitário',
					color: 'red'
				}
			},
			my_tag: {}
		}
	},
  updated() { this.monta_prop()	},
  beforeMount() { this.monta_prop()	},
  methods: {
	  monta_prop() {
      this.my_tag = this.tags[this.$props.tag]
    }
  }
}
</script>

<style lang="sass" scoped>
.my-chip
	padding: 0em 1em
	margin: 0em .5em
</style>