<template>
  <v-form method="post">
    
    <v-alert type="success" v-if="messageOkCreation != ''">{{messageOkCreation}}</v-alert>
    <v-alert type="error" v-if="messageErrorCreation != ''">{{messageErrorCreation}}</v-alert>

    <v-text-field
      v-model="product.name"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    
    <v-text-field
      v-model="product.quantity"
      label="Quantity"
      required
    ></v-text-field>
    
    <v-text-field v-model="product.unite" label="Unite" required></v-text-field>
    
    <v-text-field v-model="product.img" label="Image" required></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click.prevent="addProduct"
    >
      Validate
    </v-btn>
    <v-btn color="warning" @click.prevent="resetValidation">
      Reset Validation
    </v-btn>
  </v-form>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "addProduct",
  data() {
    return {
      valid: true,
      product: {
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
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>