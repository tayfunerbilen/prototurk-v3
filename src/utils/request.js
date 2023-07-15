function request({url, method = 'GET', data = false, dataType = 'formData',}) {
	return new Promise(async (resolve, reject) => {

		const options = {
			method,
			headers: {}
		}

		if (data) {
			options.body = data
		}

		if (dataType === 'json') {
			options.headers = {
				...options.headers,
				'content-type': 'application/json'
			}
		}

		try {
			const response = await fetch(import.meta.env.VITE_API_URL + '/' + url, options)
			const result = await response.json()
			if (response.status === 200) {
				resolve(result)
			} else {
				reject({
					statusText: response.statusText,
					...result
				})
			}
		} catch (e) {
			console.log('HATAAAAA', e)
		}
	})
}

export const post = (url, data) => request({
	url,
	data
})

export const get = url => request({url})
