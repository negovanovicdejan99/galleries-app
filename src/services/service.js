import axios from 'axios'
import {store} from '../vuex/store'
export default class Service{
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api'
        axios.interceptors.request.use(function (config) {
            const token = localStorage.getItem('token')
            config.headers.Authorization = 'Bearer '+ token;
            return config;
        });
        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (401 === error.response.status) {
                store.dispatch('removeToken')
            } else {
                return Promise.reject(error);
            }
        });
    }
    
}
