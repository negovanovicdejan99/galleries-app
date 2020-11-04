import {galleryService} from '../services/gallery'
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
    }
}