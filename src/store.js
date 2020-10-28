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
        addProduct(state,products){
            state.products.push(products)
        },
        CREATION_OK(state) {
            state.messageOkCreation = "Le produit est bien enregistré."
        },
        CREATION_ERROR(state) {
            state.messageErrorCreation = "Il y a un problème coté serveur.. merci de tester ultérieurement.."
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
        addProduct({ commit}, product) {
            axios.post(`${URL_API_PRODUCT}/products`, product, {headers: {'Content-Type': 'application/json'}})
                .then(response=> {
                    console.log(response);
                    commit('CREATION_OK')
                })
                .catch( error => {
                    console.log(error);
                    commit('CREATION_ERROR')
                });
        }
    },
})
export default store