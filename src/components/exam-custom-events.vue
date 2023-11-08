<script>
export default {
	data() {
		return {};
	},
	props: ["modelValue", "food", "foodModifiers"],
	emits: {
		"update:modelValue": null,
		"update:food": null,
		myEv: message => {
			if (typeof message === "string") {
				return true;
			} else {
				console.log("No string");
				return false;
			}
		},
	},
	methods: {
		lowercase(e) {
			let { value } = e.target;
			if (this.foodModifiers.lowercase) {
				value = value.toLowerCase();
			}
			this.$emit("update:food", value);
		},
	},
};
</script>
<template lang="pug">
.custom-events
	h2 Example custom events
	button(@click="$emit('myEv', 3)") Push me
	input(
		:value="modelValue",
		@input="$emit('update:modelValue', $event.target.value)")
	input(
		:value="food",
		@input="lowercase")
</template>
<style scoped>
.custom-events {
	border: 2px solid #000;
}
</style>
