import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {URL_API_PRODUCT} from './constants'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        products: [],

    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        }
    },
    actions: {
        getProducts({ commit }) {            
            axios
                .get(`${URL_API_PRODUCT}/products`)
                .then(response => {
                    let products = response.data
                    commit('SET_PRODUCTS', products)
                });
        }
    }

})
export default store