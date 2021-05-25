import Vue from 'vue';
import App from './App.vue';
import VTooltip from 'v-tooltip';

const db = chrome.extension.getBackgroundPage().db;
window.db = db;

Object.defineProperty(Vue.prototype, '$db', {
	get() { return db; }
});

Vue.use(VTooltip);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	render: h => h(App)
});
