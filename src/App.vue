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
        <v-btn class="mx-2" fab color="success" @click="creer = true">
          <v-icon>mdi-plus</v-icon></v-btn>
        <div>
          <v-form method="post">
          <v-dialog v-model="creer" max-width="500">
            <v-card>
              <v-progress-linear :active="loading" :indeterminate="loading" absolute height="15" top color="green accent-4"></v-progress-linear>
              <v-card-title class="grey darken-1 white--text">Entrer votre Produit !</v-card-title>
              <v-alert type="success" v-if="messageOkCreation != ''">{{messageOkCreation}}</v-alert>
              <v-alert type="error" v-if="messageErrorCreation != ''">{{messageErrorCreation}}</v-alert>

              <v-container>
                <v-text-field v-model="product.name" label="Name" required></v-text-field>
                <v-text-field v-model="product.quantity" type="number" label="Quantity" required></v-text-field>
                <v-text-field v-model="product.unite" label="Unite" required></v-text-field>
                <v-text-field v-model="product.img" label="Image" required></v-text-field>
              </v-container>
              <v-spacer></v-spacer>
              
        
              <v-btn color="success" class="ma-2" outlined @click.prevent="addProduct(),loading = true">
                Valider
              </v-btn>

              <v-btn color="grey" class="ma-2" label outlined @click.prevent="creer = false">
                Annuler
              </v-btn>
            </v-card>
          </v-dialog>
        </v-form>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "app",
  data() {
    return {
      loading: false,
      creer: false,
      valid: true,
      product: {
        id: "",
        name: "",
        quantity: "",
        unite: "",
        img: "",
      },
    };
  },
  computed: {
    ...mapState(["messageErrorCreation", "messageOkCreation"]),
  },

  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", this.product);
    },
  },
   watch: {
      loading (val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 3000)
      },
    },
};
</script>
