<template>
  <v-card color="blue-grey darken-1" dark :loading="isUpdating">
    <template v-slot:progress>
      <v-progress-linear
        absolute
        color="green lighten-3"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>
    <!-- <v-img
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg"
    > -->
    <v-row>
      <!-- <v-col class="text-right" cols="12">
          <v-menu bottom left transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="isUpdating = true">
                <v-list-item-action>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col> -->

      <v-row class="pa-4" align="center" justify="center">
        <v-col class="text-center">
          <h3 class="headline">
            {{ product.name }}
          </h3>
          <span class="grey--text text--lighten-1"
            >{{ product.quantity }} {{ product.unite }}
          </span>
        </v-col>
      </v-row>
    </v-row>
    <!-- </v-img> -->
    <v-form @submit.prevent="createProduct" method="post">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field label="Name" :disabled="isUpdating"  :rules="rules" hide-details="auto"                              
              ><input
                placeholder="name"
                v-model="product.name"
                color="blue-grey lighten-2"
            /></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Quantity" :disabled="isUpdating" 
              ><input
                placeholder="quantity"
                v-model="product.quantity"
                filled
                color="blue-grey lighten-2"
            /></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field label="Unite" :disabled="isUpdating"
              ><input
                placeholder="unite"
                v-model="product.unite"
                filled
                color="blue-grey lighten-2"
            /></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="Image" :disabled="isUpdating">
              <input
                placeholder="image"
                v-model="product.image"
                filled
                color="blue-grey lighten-2"
            /></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-card-actions>
      <v-btn
        :loading="isUpdating"
        color="green darken-3"
        depressed
        @click="isUpdating = true"
      >
        <v-icon left> mdi-update </v-icon>
        Ajouter au produits
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Ajouter",
  data() {
    return {
      isUpdating: false,
      rules: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 3) || "Min 3 characters",
      ],
      product: {
        id: null,
        name: "",
        quantity: "",
        unite: "",
        img: "",
      },
    };
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    },
  },

  methods: {},
  computed: {
    ...mapState(["products", "isError", "error"]),
  },
  mounted() {
    this.$store.dispatch("createProduct");
  },
};
</script>

<style>
</style>