export async function get(url) {
	return await fetch(url, {
		credentials: 'same-origin',
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
			'Cache': 'no-cache'
		}
	})
}

export function extractData(resp) {
	if (resp == null)
		return null;

	let response = resp
	let statusCode = response.status;
	let respBody = JSON.parse(response._bodyInit);
	if (statusCode >= 200 && statusCode < 300) {
		return respBody;
	}
}