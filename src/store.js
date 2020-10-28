import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { URL_API_PRODUCT } from './constants'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        products: [],
        error: '',
        isError: false
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_ERROR(state, errorMessage) {
            state.isError = true
            state.error = errorMessage
        },
        addProduct(state,products){
            state.products.push(products)
        }
    },
    actions: {
        getProducts({ commit }) {
            axios
                .get(`${URL_API_PRODUCT}/products`)
                .then(response => {
                    let products = response.data
                    commit('SET_PRODUCTS', products)
                })
                .catch(error => {
                    commit('SET_ERROR', error)
                })
        },
        addProduct() {
            axios.post(`${URL_API_PRODUCT}/products`, this.product)
                .then(response=> {
                    console.log(response);
                })
                .catch( error => {
                    console.log(error);
                });
        }
    },



})
export default store