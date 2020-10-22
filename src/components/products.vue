<template>
  <v-timeline>
    <v-timeline-item  v-for="product in products"
        :key="product.id" >
      <div v-if="isError">
        <v-alert color="red" dismissible type="success">{{ error }}</v-alert>
      </div>
      <v-card
        v-else
        class="elevation-5 mx-auto"
         max-width="360"
       
      >
        <v-img height="200" contain :src="product.img"></v-img>

        <v-card-title class="headline">{{ product.name }}</v-card-title>

        <v-card-text>
          <div class="my-4 subtitle-1">
            Quantité Restante : {{ product.quantity }} {{ product.unit }}
          </div>
        </v-card-text>
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
