export const mutations = {
    setGalleries(state, payload) {
        state.galleries = payload
    },
    setSingleGallery(state, payload) {
        state.singleGallery = payload
    },
    setAuthor(state, payload) {
        state.author = payload
    }
}