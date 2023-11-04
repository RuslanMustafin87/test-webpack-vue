import { createApp } from "vue/dist/vue.esm-bundler";
import "./scss/style.scss";
import App from "./App.vue";
// import "normalize.css";

const app = createApp(App);

app.component("my-com", {
	data() {
		return { x: "hello" };
	},
	template: `<span> {{ x }} </span>`,
});

app.component("custom-input", {
	props: ["modelValue"],
	emits: ["update:model2Value"],
	methods: {
		foo() {
			this.$emit("update:modelValue", event.target.value);
		},
	},
	template: `
	  <input
		:value="modelValue"
		@input="foo"
	  />
	  <div>{{ modelValue }}</div>`,
});

const vm = app.mount("#app");
