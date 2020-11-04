import axios from 'axios'
export default class AuthService{
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api',
        axios.interceptors.request.use(function (config) {
            const token = localStorage.getItem('token')
            config.headers.Authorization = 'Bearer '+ token;
            return config;
        });
    }
    login(user) {
        return axios.post('/login', user);
    }
    logout() {
        return axios.get('/logout', {
            headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
    }
    register(user) {
        return axios.post('/register', user)
    }
    authUser() {
        return axios.get('/auth-user')
    }
}
export const authService = new AuthService();