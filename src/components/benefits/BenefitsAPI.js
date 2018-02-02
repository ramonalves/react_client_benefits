import axios from 'axios'

const URL = 'http://localhost:8000'

const findAll = () => {
	const url = `${URL}/api/v1/benefit`

	return axios.get(url).then(response => response.data)
}

const deleteById = (id) => {
	const url = `${URL}/api/v1/benefit/${id}`

	return axios.delete(url).then(response => response.data)
}

export {
	findAll,
	deleteById
}