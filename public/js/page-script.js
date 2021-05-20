window.original_XMLHttpRequest = window.XMLHttpRequest;
window.WrappedXMLHttpRequest = class WrappedXMLHttpRequest extends window.original_XMLHttpRequest {
	constructor (...args) {
		super(...args);
	}

	send (...args) {
		this.addEventListener('load', () => {
			window.postMessage({
				source: 'XHRReuested',
				payload: {
					url: this.responseURL,
					data: this.responseText
				}
			}, '*');
		});
		super.send(...args);
	}
}

window.XMLHttpRequest = window.WrappedXMLHttpRequest;