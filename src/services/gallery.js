import axios from 'axios'
import Service from './service'
export default class GalleryService extends Service{
    getAll(payload) {
        return axios.get('/galleries', {
            headers: {
            'pagination': payload.pagination,
            'searchText': payload.searchText
            }
        })
    }
    get(id) {
        return axios.get(`/galleries/${id}`)
    }
    getAuthorGalleries(payload) {
        return axios.get(`/author/${payload.id}`, {
            headers: {
            'pagination': payload.pagination,
            'searchText': payload.searchText
            }
        })
    }
    getMyGalleries() {
        return axios.get('/my-galleries')
    }
    createNewGallery(gallery) {
        return axios.post('/galleries', gallery)
    }
    editGallery(payload) {
        return axios.put(`/edit-gallery/${payload.id}`, payload.gallery)
    }
    deleteGallery(id) {
        return axios.delete(`/galleries/${id}`)
    }
    createComment(comment) {
        const body = comment.body
        return axios.post(`/galleries/${comment.post_id}/comments`, {body}) 
    }
    deleteComment(id) {
        return axios.delete(`/delete-comment/${id}`) 
    }
}

export const galleryService = new GalleryService();