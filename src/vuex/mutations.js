export const mutations = {
    setGalleries(state, payload) {
        state.galleries = payload[0]
        state.numberOfGalleries = payload[1]
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
    setAuthUser(state, payload) {
        state.authUser = payload
    },
    setAuthUserGallery(state, payload) {
        state.authUserGallery = payload
    },
}
