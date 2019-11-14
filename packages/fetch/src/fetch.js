let checkStatus = response => {
	if (response.status >= 200 && response.status < 300) {
		let contentType = response.headers && response.headers.get('content-type')
		if (contentType && contentType.indexOf('application/json') !== -1) return response.json()
		return response
	} else {
		return Promise.reject(response)
	}
}

let fetch = (url, options) => window.fetch(url, options).then(checkStatus)

export default fetch
