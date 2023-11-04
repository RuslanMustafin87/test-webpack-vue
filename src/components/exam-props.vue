!
<script>
export default {
	props: {
		id: Number,
		title: String,
	},
};
</script>

<template>
	<div class=".block">
		<h1>{{ title }}</h1>
		<p>ID: {{ id }}</p>
	</div>
</template>

<style scoped>
.block {
	height: 20px;
}
</style>
