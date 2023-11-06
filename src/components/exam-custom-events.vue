<script>
export default {
	data() {
		return {};
	},
	emits: {
		myEv: message => {
			if (typeof message === "string") {
				return true;
			} else {
				console.log("No string");
				return false;
			}
		},
	},
};
</script>
<template lang="pug">
.custom-events
	button(@click="$emit('myEv', 3)") Push me
</template>
<style scoped>
.custom-events {
	border: 2px solid #000;
}
</style>
