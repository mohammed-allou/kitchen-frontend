<template>
  <v-timeline>
    <div v-if="isError">
      <v-alert color="red" dismissible type="success">{{ error }}</v-alert>
    </div>
    <v-timeline-item v-else v-for="product in products" :key="product.id">
      <v-card class="elevation-5 mx-auto" max-width="360">
        <v-img height="200px" contain :src="product.img"></v-img>
        <v-card-title class="headline">{{ product.name }}</v-card-title>
        <v-card-text>
          <div class="my-4 subtitle-1">
            Quantité Restante : {{ product.quantity }} {{ product.unite }}
          </div>
        </v-card-text>
        <v-simple-table class="mt-5">
          <template v-slot:default>
            <thead>
              <td>
                <v-btn class="pink" dark @click="productEdit(product.id)"
                  ><v-icon>mdi-pencil</v-icon></v-btn>
                <v-spacer></v-spacer>
                <v-btn class="error" dark @click="productDelete(product.id)"
                  ><v-icon>mdi-delete</v-icon></v-btn>
              </td>
            </thead>
          </template>
        </v-simple-table>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "products",

  computed: {
    ...mapState(["products", "isError", "error"]),
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>
