<template>
  <v-app>
    <v-app-bar app color="gray" dark>
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
      <products />
    </v-main>
  </v-app>
</template>

<script>
import products from "./components/products";

export default {
  name: "App",

  components: {
    products,
  },

  data: () => ({}),
};
</script>
