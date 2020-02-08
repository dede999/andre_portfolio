<template>
    <v-footer
			class="rodape">
			<v-row>
				<v-col> <span> Contato </span> </v-col>
				<v-col>
					<a href="https://api.whatsapp.com/send?phone=5511998464387">
						<v-icon large color="green darken-1">fab fa-whatsapp</v-icon>
					</a>
				</v-col>
				<v-col>
					<a href="mailto:andreluizsa00@gmail.com">
						<v-icon large color="red darken-1">fas fa-envelope</v-icon>
					</a>
				</v-col>
				<v-col>
					<a href="https://www.linkedin.com/in/andresilveira64a43372/">
						<v-icon large color="blue darken-1">fab fa-linkedin</v-icon>
					</a>
				</v-col>
			</v-row>
    </v-footer>
</template>

<style lang="sass" scoped>
.rodape
	background-color: hsl(202, 45%, 77%)
	margin-top: 2em
	+trocchi-family(default)
	span
		font-size: 20px

.v-icon
	background: linear-gradient(145deg, #99b7c9, #b6d9ef)
	box-shadow:  20px 20px 60px #86a0b0, -20px -20px 60px #cef6ff
	padding: 0.3em
	border-radius: 1em

a
	text-decoration: none
</style>