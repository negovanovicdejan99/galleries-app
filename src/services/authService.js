import axios from 'axios'
export default class AuthService{
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api'
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
}
export const authService = new AuthService();