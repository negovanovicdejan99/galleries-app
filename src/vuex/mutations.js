export const mutations = {
    setGalleries(state, payload) {
        state.galleries = payload
    },
    setSingleGallery(state, payload) {
        state.singleGallery = payload
    },
    setAuthor(state, payload) {
        state.author = payload
    },
    setToken(state, payload) {
        localStorage.setItem('token', payload)
    },
}
