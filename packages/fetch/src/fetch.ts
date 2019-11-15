let checkStatus = (response: Response) => {
	if (response.status >= 200 && response.status < 300) {
		let contentType = response.headers && response.headers.get('content-type')
		if (contentType && contentType.indexOf('application/json') !== -1) return response.json()
		return response
	} else {
		return Promise.reject(response)
	}
}

let fetch = (input: RequestInfo, init?: RequestInit): Promise<Response> => window.fetch(input, init).then(checkStatus)

export { fetch }
