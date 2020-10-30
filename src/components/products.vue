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
          <v-btn
            class="pink"
            dark
            small
            fab
            color="warning"
            @click="remplirProduct(product)"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn
            class="error"
            fab
            dark
            small
            @click.prevent="deleteProduct(product)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <div>
      <v-form>
        <v-dialog v-model="dialog" max-width="500">
          <v-card>
            <v-card-title class="grey darken-1 white--text"
              >Produit</v-card-title
            >
            <v-card-text>
              <v-container>
                <v-row>
                  <input v-model="produit.id" hidden />
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="produit.name"
                      label="Name"
                      required
                      >{{ produit.name }}</v-text-field
                    >
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="produit.quantity"
                      label="Quntite"
                      type="number"
                      required
                      >{{ produit.quantity }}</v-text-field
                    >
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="produit.unite"
                      label="Unite"
                      required
                      >{{ produit.unite }}</v-text-field
                    >
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="produit.img"
                      label="Image"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="dialog = false" color="blue-grey" dark
                >Annuler</v-btn
              >
              <v-btn
                @click.prevent="editProduct(produit)"
                color="green accent-3"
                dark
                >sauvegarder</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "products",
  data() {
    return {
      dialog: false,
      produit:{}

    };
  },

  computed: {
    ...mapState(["products", "isError", "error"]),
    ...mapGetters(["products"]),
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
    remplirProduct(a){
      this.dialog=true
      this.produit=a

    }
  },
};
</script>
