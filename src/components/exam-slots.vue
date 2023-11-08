<script>
export default {
	data() {
		return {
			items: ["a", "b", "c", "d"],
			color: "aqua",
		};
	},
};
</script>
<template lang="pug">
.slots
	h2
		slot(name="title")
	slot(:color="color")
		button Send
	ul.list(v-for="(item, index) in items")
		li
			slot(
				name="itemList",
				:item="item",
				:index="index")
	slot(
		name="example",
		:color="color")
</template>
<style>
.slots {
	border: 2px solid #000;
}
</style>
