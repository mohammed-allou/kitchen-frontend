<template>
  <v-app>
    <v-app-bar app color="brown lighten-3" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Produits</v-toolbar-title>

      <v-btn router to="/" color="red" dark big absolute botton left fab>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn router to="/addProduct" class="mx-2" fab color="success">
        <v-icon>mdi-plus</v-icon></v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "app",
};
</script>
