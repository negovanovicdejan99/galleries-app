import Vue from 'vue'
import Vuex from 'vuex'
import {getters} from './getters'
import {mutations} from './mutations'
import {actions} from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        galleries: [],
        singleGallery: {},
        author: {},
        authorGalleries: {},
        token: localStorage.getItem('token'),
        authUser: {},
        authUserGalleries: {},
        numberOfGalleries: Number
    },
    getters,
    mutations,
    actions
})