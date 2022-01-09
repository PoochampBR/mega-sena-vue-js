<template>
	<button @click="sortear">Click me</button>
	<div v-for="numero in numeros" :key="numero">
		<span>{{ numero }}</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			numeros: []
		}
	},
	methods: {
		sortear() {
			this.numeros = []
			fetch("http://localhost:4000/api-mega-sena/sorteio")
			.then(response => response.json())
			.then(body => this.numeros = body.resultado)
		}
	}
}
</script>

<style>

</style>