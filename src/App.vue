<!-- eslint-disable prettier/prettier -->
<script>
import exam from "./components/exam.vue";
import formExample from "./components/form.vue";
export default {
	name: "App",
	data() {
		return {
			jik: 0,
			isCl: false,
			isBlShow: false,
			arr: ['apple', 'orange', 'banana']
		};
	},
	components: {exam, formExample},
	methods: {
		foo() {
			this.jik += 1;
			if (this.isCl === false) {
				this.isCl = true;
				this.isBlShow = true;
			} else {
				this.isCl = false;
				this.isBlShow = false;
			}
		},
	},
	computed: {
		kij() {
			return this.jik ** 2;
		},
	},
};
</script>

<template lang="pug">
button(
	v-on:click="foo",
	title="button") click
p {{ jik }}
p(:class="[{ cl: isCl }, 'clr']") {{ kij }}
.bl(v-show="isBlShow")
my-com
ul
	li(
		v-for="item of arr",
		:key="item.id") {{ item }}
.g(:class="red ? 'red' : 'green'")
exam(
	v-for="item of arr",
	:der="item")
br
formExample
</template>

<style lang="scss">
.clr {
	font-weight: bold;
}
.cl {
	color: green;
}
.bl {
	width: 100px;
	height: 100px;
	background: aqua;
}
.red {
	color: red;
}
.green {
	color: green;
}
</style>
