<template>
  <v-form method="post">
    <v-dialog v-model="creer" max-width="500">
      <v-card class="mx-auto brown lighten-5">
        <v-alert type="success" v-if="messageOkCreation != ''">{{
          messageOkCreation
        }}</v-alert>
        <v-alert type="error" v-if="messageErrorCreation != ''">{{
          messageErrorCreation
        }}</v-alert>
        <v-card-title class="green lighten-3 brown--text text-center"
          >Entrer votre Produit !</v-card-title
        >

        <v-container>
          <v-text-field
            v-model="product.name"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="product.quantity"
            type="number"
            label="Quantity"
            required
          ></v-text-field>
          <v-text-field
            v-model="product.unite"
            label="Unite"
            required
          ></v-text-field>
          <v-text-field
            v-model="product.img"
            label="Image"
            required
          ></v-text-field>
        </v-container>
        <v-spacer></v-spacer>

        <v-btn
          color="success"
          class="ma-2"
          outlined
          @click.prevent="addProduct(); (loading = true)"
          :disabled="!product.name">
          Valider
        </v-btn>

        <v-btn
          color="grey"
          class="ma-2"
          label
          outlined
          @click.prevent="
            initMessageAdd();
            creer = false;
          "
          router
          to="/"
        >
          retour
        </v-btn>
      </v-card>
    </v-dialog>
  </v-form>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "addProduct",
  data() {
    return {
      creer: true,
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
      this.product.name = "";
      this.product.quantity = "";
      this.product.unite = "";
      this.product.img = "";
    },
    initMessageAdd() {
      this.$store.dispatch("initCreatMessage");
    },
  },
};
</script>