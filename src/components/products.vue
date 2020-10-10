<template>
  <div class="home">
    <v-container class="teal lighten" fluid >
      <v-row dense>
        <v-col class="d-flex justify-space-between"  >
          <v-card
            class="pa-3"
            outlined
            v-for="product in products"
            :key="product.id"
          >
            <v-img height="200" contain :src="product.img"></v-img>

            <v-card-title class="text-center">{{ product.nom }}</v-card-title>

            <v-card-text>
              <div class="my-4 subtitle-1">
                Quantité Restante : {{ product.quantite }} kg
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueResource from "vue-resource";
Vue.use(axios, VueAxios, VueResource);
export default {
  name: "products",

  data: () => ({
    products: [],
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    justify: ["start", "end", "center", "space-between", "space-around"],
  }),
  mounted() {
    axios
      .get(
        "https://e503eef4-bd94-4dd6-9fb0-d6719bc06ea7.mock.pstmn.io/products"
      )
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
