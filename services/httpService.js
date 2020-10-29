import axios from 'axios';

// const BASE_URL = 'http://localhost:3030/api'
const BASE_URL = 'http://shaidev.com/api'

export default {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}


async function ajax(endpoint, method = 'get', data = {}) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data: data,
        })
        return res.data;
    } catch (err) {
        console.log('Error from httpService', err);
        throw err;
    }
}