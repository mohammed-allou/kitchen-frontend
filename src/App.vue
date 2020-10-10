<template>
  <v-app>
    <v-app-bar app color="teal darken-3" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Produits</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      {{ this.$store.state.test }}
      <products />
    </v-main>

    <v-footer padless>
      <v-card class="flex">
        <v-card-title class="darken-1">
          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px" class="teal--text">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import products from "./components/products";
import { mapState } from "vuex";

export default {
  name: "App",

  components: {
    products,
  },
  mounted() {
    this.$store.dispatch("products_");
  },

  computed: {
    ...mapState(["products"]),
  },
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
