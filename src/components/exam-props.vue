!
<script>
export default {
	props: {
		title: String,
		id: [Number, String],
		prop: String,
		propA: String,
		propB: {
			type: Number,
			default: 33,
		},
		propC: {
			type: String,
			required: true,
		},
		propD: {
			validator(value) {
				return value.length > 5 ? true : false;
			},
		},
		propE: {
			type: Object,
			default() {
				return { message: "Learn props" };
			},
		},
	},
};
</script>

<template>
	<div class="props">
		<h2>{{ prop }} {{ propA }}</h2>
		<p>ID: {{ id }}</p>
		<p>{{ title }}</p>
		<P>{{ propB }}</P>
		<P>{{ propC }}</P>
		<P>{{ propD }}</P>
		<P>{{ propE.message }}</P>
	</div>
</template>

<style scoped>
.props {
	border: 2px solid #000;
}
</style>
