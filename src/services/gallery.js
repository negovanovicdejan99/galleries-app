import axios from 'axios'
export default class GalleryService{
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api'
    }
}

export const galleryService = new GalleryService();