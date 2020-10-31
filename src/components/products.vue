<template>
  <div>
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
          <div class="text-center ma-2">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" class="pink" dark small fab color="warning" @click.prevent="remplirProduct(product)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Editer Produit</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" class="error" fab dark small @click.prevent="supprimeProduct(product)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Supprimer Produit</span>
            </v-tooltip>
          </div>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <div class="text-center">
      <v-dialog v-model="open">
        <v-card>
          <v-progress-linear :active="loading" :indeterminate="loading" absolute height="10" bottom color="deep-orange"></v-progress-linear>
          <v-card-title class="headline red lighten-2"><v-icon>mdi-cloud-alert</v-icon>
            Attention 
          </v-card-title>
          <v-card-text>
            <v-icon>mdi-error</v-icon>
            Êtes-vous sûr de vouloir supprimer ce produit?
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
           
            <v-btn class="ma-2" color="orange" label outlined @click.prevent="deleteProduct(prod), (loading = true), (snackbar = true)">
              J’accepte
            </v-btn>
            
            <v-snackbar v-model="snackbar" :vertical="vertical">
              Le produit a bien été suprimer!!
              <template v-slot:action="{ attrs }">
                <v-btn color="indigo" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
              </template>
            </v-snackbar>

            <v-btn color="grey" class="ma-2" label outlined @click.prevent="open = false">Annuler</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div>
      <v-form>
        <v-dialog v-model="dialog" width=auto>
          <v-card>
          <v-progress-linear :active="loading" :indeterminate="loading" absolute height="10" top color="green"></v-progress-linear>
            <v-card-title class="green darken-1 text--center"><v-icon>mdi-pencil</v-icon> Editer le Produit</v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <input v-model="produit.id" hidden />
                  <v-col cols="12" md="4">
                    <v-text-field v-model="produit.name" label="Name" required>{{ produit.name }}</v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="produit.quantity" label="Quntite" type="number" required>{{ produit.quantity }}</v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="produit.unite" label="Unite" required>{{ produit.unite }}</v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field v-model="produit.img" label="Image" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click.prevent="dialog = false" outlined color="blue-grey" dark>Annuler</v-btn>
              <v-btn @click.prevent="editProduct(produit),(loading = true), (snackbar1 = true)" color="green accent-3" outlined dark>
                <v-icon>mdi-checkbox-marked-circle</v-icon>sauvegarder</v-btn>
                 <v-snackbar v-model="snackbar1" :vertical="vertical">
                  Le produit a bien été modifier!
                  <template v-slot:action="{ attrs }">
                    <v-btn color="indigo" text v-bind="attrs" @click="snackbar1 = false,dialog = false">Close</v-btn>
                  </template>
                </v-snackbar>
            </v-card-actions>
           
          </v-card>
        </v-dialog>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "products",
  data() {
    return {
      snackbar: false,
      snackbar1: false,
      vertical: true,
      dialog: false,
      open: false,
      loading: false,
      produit: {},
      prod: {},
    };
  },

  computed: {
    ...mapState(["products", "isError", "error"]),
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    deleteProduct(product) {
      this.$store.dispatch("deleteProduct", product);
    },
    editProduct(product) {
      this.$store.dispatch("editProduct", product);
      this.dialog = true;
    },
    remplirProduct(a) {
      this.dialog = true;
      this.produit = a;
    },
    supprimeProduct(b) {
      this.open = true;
      this.prod = b;
    },
  },
  watch: {
    loading(val) {
      if (!val) return;

      setTimeout(() => (this.loading = false), 3000);
    },
  },
};
</script>
