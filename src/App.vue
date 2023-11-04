<!-- eslint-disable prettier/prettier -->
<script>
import exam from "./components/exam.vue";
import formExample from "./components/exam-form.vue";
import examTabs from "./components/exam-tabs.vue";
export default {
	name: "App",
	data() {
		return {
			jik: 0,
			str: "hello!",
			isCl: false,
			isBlShow: false,
			arr: ['apple', 'orange', 'banana'],
			red: true
		};
	},
	components: {exam, formExample, examTabs },
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
exam(
	v-for="item of arr",
	:der="item")
br
formExample
custom-input(v-model="str")
examTabs
</template>

<style lang="scss">
* {
	box-sizing: border-box;
}
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
</style>
