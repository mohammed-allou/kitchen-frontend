<template>
  <v-container fluid>
    <v-row>
      <v-col class="d-flex justify-space-between">
        <v-card v-for="product in products" :key="product.id">
          <v-img height="200" :src="product.img"></v-img>
          <v-card-title>{{ product.nom }}</v-card-title>
          <v-card-text>
            <div class="my-4 subtitle-1">
              Quantité Restante : {{ product.quantite }} kg
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueResource from 'vue-resource'
Vue.use(axios,VueAxios,VueResource);
export default {
  name: "products",

  data: () => ({
    products: [],
  }),
  mounted() {
       
    axios.get("https://e503eef4-bd94-4dd6-9fb0-d6719bc06ea7.mock.pstmn.io/products")
      .then((response) => {
        console.log(response.data);
        this.products = response.data;
        
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
