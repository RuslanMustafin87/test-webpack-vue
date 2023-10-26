<script>
export default {
	data() {
		return {
			isActive: false,
		};
	},
	props: ["der"],
	methods: {
		foo() {
			this.isActive = this.isActive ? false : true;
		},
	},
};
</script>

<template lang="pug">
p {{ der }}
button.huj(
	@click.ctrl="foo",
	:style="{ backgroundColor: isActive ? 'red' : 'aqua' }")
	//- :class="{ red: isActive }")
</template>

<style lang="scss">
.huj {
	width: 50px;
	height: 50px;
	background-color: aqua;
}
.red {
	background-color: red;
}
</style>
