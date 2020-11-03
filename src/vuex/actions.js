import {galleryService} from '../services/gallery'
export const actions = {
    async getGalleries(state) {
        console.log('ovde!')
        const response = await galleryService.getAll();
        state.commit('setGalleries', response.data)
    }
}