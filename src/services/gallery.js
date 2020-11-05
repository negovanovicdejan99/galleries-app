import axios from 'axios'
import Service from './service'
export default class GalleryService extends Service{
    getAll() {
        return axios.get('/galleries')
    }
    get(id) {
        return axios.get(`/galleries/${id}`)
    }
    getAuthor(id) {
        return axios.get(`/author/${id}`)
    }
    getMyGalleries() {
        return axios.get('/my-galleries')
    }
    createNewGallery(gallery) {
        return axios.post('/galleries', gallery)
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