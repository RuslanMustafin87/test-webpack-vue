<template lang="pug">
.d Hello World
</template>

<script>
const f = ["hhh", "hello", "world"];
const func = f => {
	f.map(x => console.log(x));
};
func(f);

export default {
	name: "App",
};
</script>

<style lang="scss">
.d {
	color: red;
	font-size: 32px;
}
@media (min-width: 1024px) {
	.d {
		color: green;
	}
}
.h {
	color: blue;
}
</style>
