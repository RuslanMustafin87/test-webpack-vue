import { createApp } from "vue/dist/vue.esm-bundler";
// import './css/style.css';
import App from "./App.vue";

const foo = createApp(App);

foo.component("my-com", {
	data() {
		return { x: "hello" };
	},
	template: `<span> {{ x }} </span>`,
});

const vm = foo.mount("#app");
