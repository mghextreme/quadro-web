<template>
	<div class="page-title mb-3">
		<h3>{{title}}</h3>
		<hr v-if="subtitle" />
		<span v-if="subtitle">{{subtitle}}</span>
	</div>
</template>

<script>
	export default {
		name: 'page-title',
		props: ['title', 'subtitle']
	}

</script>

<style lang="scss" scoped>
	@import '../sass/defaults';

	.page-title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h3 {
			font-size: 2em;
		}

		hr {
			width: 70px;
			height: 2px;
			margin: 10px auto;
			background-color: $color-main;
		}

		span {
			font-size: 1em;
		}
	}

</style>
