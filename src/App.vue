<template>
  <v-app>
    <v-app-bar app color="teal darken-3" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Produits</v-toolbar-title>

      <div>
        <v-btn router to="/" color="red" dark big absolute botton left fab>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-btn class="mx-2" fab color="success" router to="/addProduct">
        <v-icon>mdi-plus</v-icon></v-btn>
      </div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
