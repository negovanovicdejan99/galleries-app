import axios from 'axios'
export default class Service{
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api'
        axios.interceptors.request.use(function (config) {
            const token = localStorage.getItem('token')
            config.headers.Authorization = 'Bearer '+ token;
            return config;
        });
    }
}
