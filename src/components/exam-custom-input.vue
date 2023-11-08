<script>
export default {
	props: ["modelValue"],
	emits: ["update:modelValue"],
	methods: {
		foo(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>
<template lang="pug">
.fruit
	h2 Example custom input
	input(
		:value="modelValue",
		@input="foo")
	p {{ modelValue }}
</template>
<style>
.fruit {
	border: 2px solid #000;
}
</style>
