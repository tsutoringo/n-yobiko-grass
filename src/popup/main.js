import Vue from 'vue';
import App from './App.vue';
import VTooltip from 'v-tooltip';
import { Octicon } from 'octicons-vue';

const db = chrome.extension.getBackgroundPage().db;
window.db = db;

Object.defineProperty(Vue.prototype, '$db', {
	get() { return db; }
});

Vue.component('octicon', Octicon)
Vue.use(VTooltip);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	render: h => h(App)
});
