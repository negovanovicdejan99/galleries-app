export const getters = {
    galleries: ({galleries}) => galleries,
    singleGallery: ({singleGallery}) => singleGallery,
    author: ({author}) => author,
    isUserAuthenticated(state) {
        return !!state.token
    },
}