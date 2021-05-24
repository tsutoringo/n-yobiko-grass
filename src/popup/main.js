import Vue from 'vue';
import App from './App.vue';

const db = chrome.extension.getBackgroundPage().db;
window.db = db;

Object.defineProperty(Vue.prototype, '$db', {
	get() { return db; }
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	render: h => h(App)
});
