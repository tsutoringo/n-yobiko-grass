import Vue from 'vue';
import App from './App.vue';
import VTooltip from 'v-tooltip';
import { Octicon } from 'octicons-vue';
import router from './router';

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
	router,
	render: h => h(App),
});
