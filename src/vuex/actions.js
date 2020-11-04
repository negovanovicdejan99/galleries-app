import {galleryService} from '../services/gallery'
import {authService} from '../services/authService'
export const actions = {
    async getGalleries(state) {
        const response = await galleryService.getAll();
        state.commit('setGalleries', response.data)
    },
    async getSingleGallery(state, payload) {
        const response = await galleryService.get(payload);
        state.commit('setSingleGallery', response.data)
    },
    async getAuthor(state, payload) {
        const response = await galleryService.getAuthor(payload);
        state.commit('setAuthor', response.data)
    },
    async loginUser(state, payload){
        try {
            await authService.login(payload).then(response => 
                state.commit('setToken', response.data.token))
                state.commit('setIsAuthorized', true)
        }catch (error) {
            return error.response.data.message;
        }
    },
    async logoutUser(state) {
        await authService.logout()
        localStorage.removeItem('token')
        state.commit('setIsAuthorized', false)
    },
}