<template>
  <div class="text-center">
    <v-dialog v-model="open">
      <v-card>
        <v-card-title class="headline red lighten-2"
          ><v-icon>mdi-cloud-alert</v-icon>
          Attention
        </v-card-title>
        <v-card-text>
          <v-icon>mdi-error</v-icon>
          Êtes-vous sûr de vouloir supprimer {{product.name}} ?
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            class="ma-2"
            color="orange"
            label
            outlined
            @click.prevent="
              deleteProduct(product), (loading = true), (snackbar = true)
            "
          >
            J’accepte
          </v-btn>

          <v-snackbar v-model="snackbar" :vertical="vertical">
            Le produit a bien été suprimer!!
            <template v-slot:action="{ attrs }">
              <v-btn
                color="indigo"
                text
                v-bind="attrs"
                @click="(snackbar = false), (open = false)"
                router
                to="/"
                >Close</v-btn
              >
            </template>
          </v-snackbar>

          <v-btn
            color="grey"
            class="ma-2"
            label
            outlined
            @click.prevent="open = false"
            >Annuler</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "deleteProduct",
  props: ["product","open"],
  data() {
    return {
      snackbar: false,
      vertical: true,
      
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
  },
};
</script>

<style>
</style>