import {galleryService} from '../services/gallery'
import {authService} from '../services/authService'
export const actions = {
    async getGalleries(state, payload) {
        const response = await galleryService.getAll(payload);
        state.commit('setGalleries', response.data)
    },
    async getSingleGallery(state, payload) {
        const response = await galleryService.get(payload);
        state.commit('setSingleGallery', response.data)
    },
    async getAuthorGalleries(state, payload) {
        const response = await galleryService.getAuthorGalleries(payload);
        state.commit('setAuthorGalleries', response.data)
    },
    async loginUser(state, payload){
        try {
            await authService.login(payload).then(response => 
                state.commit('setToken', response.data.token))
        }catch (error) {
            return error.response.data.message;
        }
    },
    async logoutUser() {
        await authService.logout()
        localStorage.removeItem('token')
    },
    async registerUser(state, payload){
        try {
            await authService.register(payload).then(response => 
                state.commit('setToken', response.data.token))
        }catch (error) {
            return error.response.data.errors;
        }
    },
    async getAuthUser(state) {
        await authService.authUser().then(response => 
            state.commit('setAuthUser', response.data))
    },
    async getAuthUserGalleries(state, payload) {
        await authService.authUserGalleries(payload).then(response => 
            state.commit('setAuthUserGalleries', response.data))
    },
    async getCreateNewGallery(state, payload) {
        try {
            await galleryService.createNewGallery(payload)
        }catch (error) {
            return error.response.data.errors;
        }
    },
    async getEditGallery(state, payload) {
        try {
            await galleryService.editGallery(payload)
        }catch (error) {
            return error.response.data.errors;
        }
    },
    async getCreateComment(state, payload) {
        try {
            await galleryService.createComment(payload)
        }catch (error) {
            return error.response.data.errors;
        }
    },
    async getDeleteComment(state, payload) {
        try {
            await galleryService.deleteComment(payload)
        }catch (error) {
            return error.response.data.errors;
        }
    },
    async getDeleteGallery(state, payload) {
        await galleryService.deleteGallery(payload);
    },
    removeToken() {
        localStorage.removeItem('token')
    }
}