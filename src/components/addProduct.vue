<template>
  <v-form ref="form" v-model="valid" method="post" lazy-validation>
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
    <v-btn type="submit" color="warning" @click.prevent="resetValidation">
      Reset Validation
    </v-btn>
  </v-form>
</template>
<script>
import { URL_API_PRODUCT } from "../constants";

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
  methods: {
    addProduct() {
      console.log(this.product);
      this.$http
        .post(`${URL_API_PRODUCT}/products`, this.product, {
          headers: { "content-type": "application/json" },
        })
        .then(
          (result) => {
            console.log(this.response);
            console.log(result.product);

            // this.response = result.product;
          },
          (error) => {
            console.error(error);
          }
        );
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>