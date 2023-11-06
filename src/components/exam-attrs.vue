<script>
export default {
	data() {
		return {};
	},
};
</script>
<template lang="pug">
.attrs
	h2(:style="$attrs.style") Example attrs
	button(v-bind="$attrs") Push
</template>
<style scoped>
.attrs {
	border: 2px solid black;
}
</style>
