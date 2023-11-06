<script>
export default {
	data() {
		return {
			isActive: false,
		};
	},
};
</script>

<template lang="pug">
.events
	h2 Example events
	button.huj(
		@click.ctrl.exact="isActive = isActive ? false : true",
		:style="{ backgroundColor: isActive ? 'red' : 'aqua' }")
</template>

<style lang="scss">
.events {
	border: 2px solid black;
}
.huj {
	width: 50px;
	height: 50px;
	background-color: aqua;
}
.red {
	background-color: red;
}
</style>
