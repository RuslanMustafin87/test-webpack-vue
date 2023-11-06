<script>
import tab1 from "./tabs/tab-1.vue";
import tab2 from "./tabs/tab-2.vue";
import tab3 from "./tabs/tab-3.vue";
export default {
	data() {
		return {
			currentTab: tab1,
			tabs: [tab1, tab2, tab3],
		};
	},
	components: [tab1, tab2, tab3],
};
</script>
<template lang="pug">
.tabs
	h2.tabs__title Example tabs
	.tabs__left
		.tabs__item(
			v-for="tab in tabs",
			:key="tab",
			:class="{ active: currentTab === tab }",
			@click="currentTab = tab")
	component.tabs__right(:is="currentTab")
</template>
<style>
.tabs {
	height: 300px;
	width: 100%;
	border: 2px solid #000;
	display: flex;
}
.tabs__left {
	width: 10%;
	height: 100%;
	border: 1px solid #000;
}
.tabs__right {
	width: 90%;
	height: 100%;
}
.tabs__item {
	height: 33.3333%;
	width: 100%;
	cursor: pointer;
	border: 1px solid #000;
}
.active {
	background-color: gray;
}
</style>
