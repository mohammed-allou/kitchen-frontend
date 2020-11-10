<template>
  <div class="brown lighten-2">
    <deleteProduct v-if="openDelete" :product="produit" :open="openDelete" :close="closeDelDialog" />
    <editProduct v-if="openEdit" :product="produit" :dialog="openEdit" :close="closeDialog" />

    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <div v-if="isError">
          <v-alert color="red" dismissible type="success">{{ error }}</v-alert>
        </div>
        <template v-else>
          <v-col v-for="product in products" :key="product.id" cols="12" md="4">
            <v-card class="mx-auto brown lighten-4" max-width="350">
              <v-img height="200px" contain :src="product.img"></v-img>

              <v-card-title class="headline text-center">{{ product.name }}</v-card-title>

              <v-card-text>
                <div class="my-4 subtitle-1">
                  Quantité Restante : {{ product.quantity }} {{ product.unite }}
                </div>
              </v-card-text>
              <div class="text-center ma-2">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      class="pink"
                      dark
                      small
                      fab
                      color="warning"
                      @click.prevent="fillProductForEdit(product)"
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <span>Editer Produit</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      class="error"
                      fab
                      dark
                      small
                      @click.prevent="fillProductForDelete(product)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </template>
                  <span>Supprimer Produit</span>
                </v-tooltip>
              </div>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import deleteProduct from "./deleteProduct";
import editProduct from "./editProduct";

export default {
  name: "products",
  components: {
    deleteProduct,
    editProduct,
  },
  data() {
    return {
      openDelete: false,
      openEdit: false,
      produit:{}
    };
  },

  computed: {
    ...mapState(["products", "isError", "error"]),
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    fillProductForDelete(a) {
      this.openDelete = true;
      this.produit = a;
    },
    fillProductForEdit(b) {
      this.openEdit = true;
      this.produit = b;
    },
    closeDialog(){
      this.openEdit=false
    },
    closeDelDialog(){
      this.openDelete=false
    }
  },
};
</script>
