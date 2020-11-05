import axios from 'axios'
export default class AuthService{
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