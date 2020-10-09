import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)
const store= new Vuex.Store({
    state: {
         products: [],
        test : 'Test bach nchoufou'
    },
    mutations: {
        SET_POSTS(state, products) {
            state.products = products
        }
    },
    actions: {
        Products_({commit}) {
            axios
                .get(
                    "https://e503eef4-bd94-4dd6-9fb0-d6719bc06ea7.mock.pstmn.io/products"
                )
                .then(response => {
                    console.log(response)
                    let products = response.data
                    commit('SET_POSTS', products)
                });
        }
    }

})
export default store