import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { URL_API_PRODUCT } from './constants'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        products: [],
        error: '',
        isError: false,
        messageOkCreation: "",
        messageErrorCreation: ""
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products
        },
        SET_ERROR(state, errorMessage) {
            state.isError = true
            state.error = errorMessage
        },
        ADD_PRODUCT(state, products) {
            state.products.push(products)
        },
        CREATION_OK(state) {
            state.messageOkCreation = "Le produit est bien enregistré."
        },
        CREATION_ERROR(state) {
            state.messageErrorCreation = "Il y a un problème coté serveur.. merci de tester ultérieurement.."
        },
        EDIT_PRODUCT() {

            
        },
        DELETE_PRODUCT(state, product) {
            let index = state.products.findIndex(item => item.id === product.id)
            state.products.splice(index, 1)
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
        addProduct({ commit }, product) {
            axios.post(`${URL_API_PRODUCT}/products`, product)
                .then(response => {
                    console.log(response);
                    commit('CREATION_OK')
                })
                .catch(error => {
                    console.log(error);
                    commit('CREATION_ERROR')
                });
        },
        editProduct({ commit }, product) {
            axios.put(`${URL_API_PRODUCT}/products/${product.id}`, product, { headers: { 'Content-Type': 'application/json' } } )
                .then(response => {
                    console.log(response);
                    commit('EDIT_PRODUCT', product)

                })
                .catch(error => {
                    console.log(error);

                });
        },
        deleteProduct({ commit }, product) {
            axios.delete(`${URL_API_PRODUCT}/products/${product.id}`)
                .then(response => {
                    console.log(response);
                    commit('DELETE_PRODUCT', product)
                }).catch(err => {
                    console.log(err)
                })
        }
    },
})
export default store