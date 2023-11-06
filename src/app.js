import { createApp } from "vue/dist/vue.esm-bundler";
import "./scss/style.scss";
import App from "./App.vue";
// import "normalize.css";

const app = createApp(App);

app.component("my-com", {
	data() {
		return { x: "hello" };
	},
	props: ["der"],
	template: `<span> {{ der }} </span>`,
});

const vm = app.mount("#app");
