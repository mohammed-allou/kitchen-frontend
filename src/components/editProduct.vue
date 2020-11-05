<template>
  <div>
    <v-form>
      <v-dialog v-model="dialog" width="auto">
        <v-card class="mx-auto brown lighten-5">
          <v-alert type="success" v-if="messageOkEdition != ''">{{
            messageOkEdition
          }}</v-alert>
          <v-alert type="error" v-if="messageErrorEdition != ''">{{
            messageErrorEdition
          }}</v-alert>

          <v-card-title class="green lighten-3 text--center"
            ><v-icon>mdi-pencil</v-icon> Editer le Produit</v-card-title
          >
          <v-card-text>
            <v-container>
              <v-row>
                <input v-model="product.id" hidden />
                <v-col cols="12" md="4">
                  <v-text-field v-model="product.name" label="Name" required>{{
                    product.name
                  }}</v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="product.quantity"
                    label="Quntite"
                    type="number"
                    required
                    >{{ product.quantity }}</v-text-field
                  >
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="product.unite"
                    label="Unite"
                    required
                    >{{ product.unite }}</v-text-field
                  >
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="product.img"
                    label="Image"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click.prevent="
                close();
                initMessageEdit();
              "
              router
              to="/"
              outlined
              color="blue-grey"
              dark
              >Retour</v-btn
            >
            <v-btn
              @click.prevent="editProduct(product)"
              color="green accent-3"
              outlined
              dark
            >
              <v-icon>mdi-checkbox-marked-circle</v-icon>sauvegarder</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "editProduct",
  props: ["dialog", "product", "close"],
  data() {
    return {};
  },
  computed: {
    ...mapState(["messageOkEdition", "messageErrorEdition"]),
    isOpen() {
      return this.dialog;
    },
  },

  methods: {
    editProduct(product) {
      this.$store.dispatch("editProduct", product);
    },
    initMessageEdit() {
      this.$store.dispatch("initEditMessage");
    },
  },
  strict: true,
};
</script>

<style>
</style>