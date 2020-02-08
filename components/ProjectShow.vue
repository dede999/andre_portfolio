<template>
	<div>
		<h1>
			<a :href="`${project.link}`">{{ project.title_pt }}</a>
		</h1>
    <v-row>
      <tag-chip
        v-for="(tag, i) in project.tags"
        :key="i" :tag="tag" /> <v-spacer/>
    </v-row>
    <v-row v-if="project.framework.length > 0">
      <kbd>Frameworks:</kbd> <v-spacer/> {{ framework_show(project.framework) }}
    </v-row>
		<v-row>
			<kbd>Primeiro Commit:</kbd> <v-spacer/> {{ project.first_commit }}
		</v-row>
		<v-row>
			<kbd>Descrição:</kbd> <v-spacer/> {{ project.desc_pt }}
		</v-row>
	</div>
</template>

<script>
import TagChip from './TagChip'

export default {
	components: { TagChip },
	props: {
		project: Object
	},
	data() {
		return {
		}
	},
	methods: {
		capitalize(str) {
			let tools = str.split(' ')
			return tools.reduce((acc, word) => {
				return acc + ' ' + word.charAt(0).toUpperCase() + word.slice(1)
			}, '');
		},
		framework_show(arr) {
			let resp = arr.map((item) => this.capitalize(item))
			return resp.join(', ')
		}
	}
}
</script>

<style lang="sass" scoped>
h1
	margin-left: 1em

div.row
	margin-top: 1.15em

a
	text-decoration: none
</style>
