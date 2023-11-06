<script>
export default {
	data() {
		return {
			word: "",
			text: "",
			check: false,
			check2: false,
			tmp: "",
			pick: "",
			yes: "Да",
			no: "Нет",
			a: "White",
			b: "Black",
			selected: "",
			op1: "Опция 1",
			op2: "Опция 2",
			blColor: "red",
		};
	},
	watch: {
		check() {
			this.check === true ? (this.tmp = "Hi!") : (this.tmp = "Bye!");
		},
		// blColor() {

		// },
	},
};
</script>

<template lang="pug">
.form
	h2 Example form
	input(
		type="text",
		v-model.lazy.number.trim="word")
	.word {{ word }}
	textarea(
		name="text",
		v-model="text",
		cols="30",
		rows="10")
	.text(style="white-space: pre-wrap") {{ text }}
	input#ch(
		type="checkbox",
		name="check",
		v-model="check")
	label(for="ch") {{ tmp }}
	br
	input#ch2(
		type="checkbox",
		name="check2",
		v-model="check2",
		:true-value="yes",
		:false-value="no")
	label(for="ch2") {{ check2 }}
	br
	input(
		type="radio",
		v-model="pick",
		:value="a")
	input(
		type="radio",
		v-model="pick",
		:value="b")
	.radio {{ pick }}
	br
	select(v-model="selected")
		option(:value="op1") 123
		option(:value="op2") 456
	.select {{ selected }}
	br
	.h
		input#f.ch(type="checkbox")
		label.bt(for="f")
	br
	input.radio(
		type="radio",
		v-model="blColor",
		value="red")
	input.radio(
		type="radio",
		v-model="blColor",
		value="blue")
	.bl-color(:style="{ background: blColor }")
	input(@input="console.log($event.target.value)")
</template>

<style lang="scss">
.form {
	border: 2px solid black;
}
.text {
	width: 200px;
	height: 100px;
	border: 1ch solid black;
}
.h {
	position: relative;
	border: 1px solid #000;
	height: 100px;
	width: 100px;
}
.ch {
	border: 0;
	-webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
	clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
	white-space: nowrap;
}
.bt {
	display: block;
	width: 20px;
	height: 20px;
	background-color: red;
}
.h > input:checked + label.bt {
	background-color: green;
}
.bl-color {
	width: 200px;
	height: 200px;
}
</style>
