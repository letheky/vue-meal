import axios from "axios";

const http = axios.create({
    baseURL: 'https://themealdb.com/api/json/v1/1/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default http;