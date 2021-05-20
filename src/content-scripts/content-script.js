window.addEventListener('DOMContentLoaded', () => {
	injectScript(chrome.extension.getURL('/js/page-script.js'));
});

window.addEventListener("message", function(event) {
	const {source, payload} = event.data; 
	if (source === 'XHRReuested' && /^https:\/\/api.nnn.ed.nico\/v2\/material\/courses\/\d+\/chapters\/\d+$/.test(payload.url)) {
		chrome.runtime.sendMessage({
			type: 'update',
			url: payload.url,
			payload: payload.data
		});
	}
});


function injectScript (url) {
	const el = document.createElement('script');
	el.src = url;
	document.head.appendChild(el);
}