<!-- eslint-disable prettier/prettier -->
<script>
import examProps from "./components/exam-props.vue";
import examEvents from "./components/exam-events.vue";
import examForm from "./components/exam-form.vue";
import examCustomInput from "./components/exam-custom-input.vue";
import examTabs from "./components/exam-tabs.vue";
import examAttrs from "./components/exam-attrs.vue";
import examCustomEvents from "./components/exam-custom-events.vue";
import examSlots from "./components/exam-slots.vue";
export default {
	name: "App",
	data() {
		return {
			jik: 0,
			str: "hello!",
			isCl: false,
			isBlShow: false,
			fruit: "apple",
			vegetable: "potato",
			arr: ["apple", "orange", "banana"],
			red: true,
			prop: "props",
			num: 0,
			obj: {
				id: 43,
				title: "Vegetables",
			},
		};
	},
	components: { examEvents, examProps, examForm, examCustomInput, examTabs, examAttrs, examCustomEvents, examSlots },
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
ul
	li(
		v-for="item of arr",
		:key="item.id") {{ item }}
my-com(
	v-for="item of arr",
	:der="item")
br
examProps(
	prop="Example",
	:propA="prop",
	propD="dd",
	v-bind="obj")
examEvents
examForm
examCustomInput(v-model="str")
examTabs
examAttrs#examAttrs(
	@click="console.log('hi')",
	title="hi",
	style="color: green")
examCustomEvents(
	@my-ev="num += $event",
	v-model="fruit",
	v-model:food.lowercase="vegetable")
p {{ num }}
p {{ fruit }}
p {{ vegetable }}
examSlots
	template(v-slot:title) Example slots
	template(v-slot:default)
		button Save
	template(v-slot:itemList="slotProps")
		span {{ slotProps.index }} {{ slotProps.item }}
	template(#example="{ color }")
		p {{ color }}
examSlots(v-slot="{ color }")
	p {{ color }}
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
