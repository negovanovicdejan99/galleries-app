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
        token: localStorage.getItem('token'),
        authUser: {},
    },
    getters,
    mutations,
    actions
})