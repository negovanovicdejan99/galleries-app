export const getters = {
    galleries: ({galleries}) => galleries,
    singleGallery: ({singleGallery}) => singleGallery,
    author: ({author}) => author,
    token (){return localStorage.getItem('token')},
    authUser: ({authUser}) => authUser,
    authUserGallery: ({authUserGallery}) => authUserGallery,
    numberOfGalleries: ({numberOfGalleries}) => numberOfGalleries,
}