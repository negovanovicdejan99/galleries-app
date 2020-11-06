export const mutations = {
    setGalleries(state, payload) {
        state.galleries = payload[0]
        state.numberOfGalleries = payload[1]
    },
    setSingleGallery(state, payload) {
        state.singleGallery = payload
    },
    setAuthorGalleries(state, payload) {
        state.author = payload[0]
        state.authorGalleries = payload[1]
        state.numberOfGalleries = payload[2]
    },
    setToken(state, payload) {
        localStorage.setItem('token', payload)
    },
    setAuthUser(state, payload) {
        state.authUser = payload
    },
    setAuthUserGalleries(state, payload) {
        state.authUser = payload[0]
        state.authUserGalleries = payload[1]
        state.numberOfGalleries = payload[2]
    },
}
