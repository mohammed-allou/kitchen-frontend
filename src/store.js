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
        messageErrorCreation: "",
        messageOkEdition: "",
        messageErrorEdition: "",
        messageOkSuppress: "",
        messageErrorSuppress: ""
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
        EDIT_OK(state) {
            state.messageOkEdition = "Le produit est bien modifié."
        },
        EDITION_ERROR(state) {
            state.messageErrorEdition = "Il y a un problème coté serveur.. merci de tester ultérieurement.."
        },
        DELETE_PRODUCT(state, product) {
            let index = state.products.findIndex(item => item.id === product.id)
            state.products.splice(index, 1)
        },
        SUPPRESS_OK(state) {
            state.messageOkSuppress = "Le produit est bien suprimé."
        },
        SUPPRESS_ERROR(state) {
            state.messageErrorSuppress = "Il y a un problème coté serveur.. merci de tester ultérieurement.."
        },
        INIT_CREAT_MESSAGE(state) {
            state.messageOkCreation = ''
        },
        INIT_EDIT_MESSAGE(state) {
            state.messageOkEdition = ''
        },
        INIT_DELETE_MESSAGE(state) {
            state.messageOkSuppress = ''
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
                    commit('ADD_PRODUCT',response)
                    commit('CREATION_OK')
                })
                .catch(error => {
                    commit('CREATION_ERROR',error)
                });
        },
        editProduct({ commit }, product) {
            axios.put(`${URL_API_PRODUCT}/products/${product.id}`, product, { headers: { 'Content-Type': 'application/json' } })
                .then(response => {
                    commit('EDIT_OK',response)
                })
                .catch(error => {
                    commit('EDITION_ERROR',error)
                });
        },
        deleteProduct({ commit }, product) {
            axios.delete(`${URL_API_PRODUCT}/products/${product.id}`)
                .then(response => {
                    commit('DELETE_PRODUCT', product,response)
                    commit('SUPPRESS_OK')
                }).catch(err => {
                    commit('SUPPRESS_ERROR',err)
                })
        },
        initCreatMessage({ commit }) {
            commit('INIT_CREAT_MESSAGE')
        },
        initEditMessage({ commit }) {
            commit('INIT_EDIT_MESSAGE')
        },
        initDeleteMessage({ commit }) {
            commit('INIT_DELETE_MESSAGE')
        },
    },
})
export default store