export const getters = {
    galleries: ({galleries}) => galleries,
    singleGallery: ({singleGallery}) => singleGallery,
    authorGalleries: ({authorGalleries}) => authorGalleries,
    token (){return localStorage.getItem('token')},
    authUser: ({authUser}) => authUser,
    authUserGalleries: ({authUserGalleries}) => authUserGalleries,
    numberOfGalleries: ({numberOfGalleries}) => numberOfGalleries,
    author: ({author}) => author,
}