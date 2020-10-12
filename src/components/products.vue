<template>
  <div class="home">
    <v-container class="teal lighten" fluid>
      <v-row dense>
        <v-col class="d-flex justify-space-between">
          <v-card
            class="pa-3"
            outlined
            v-for="product in products"
            :key="product.id"
          >
            <v-img height="200" contain :src="product.img"></v-img>

            <v-card-title class="text-center">{{ product.name }}</v-card-title>

            <v-card-text>
              <div class="my-4 subtitle-1">
                Quantité Restante : {{ product.quantity }} {{ product.unit }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "products",

  data: () => ({}),
  computed: {
    ...mapState(["products"]),
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
