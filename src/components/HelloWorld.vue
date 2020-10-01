<template>
  <v-container fluid>
    <v-row >
      <v-col class="d-flex justify-space-between ">
        
        <v-card v-for="product in products" :key="product.id">
          <v-img height="200" :src="require('../assets/image.jpg')"></v-img>
          <v-card-title>{{ product.nom }}</v-card-title>
          <v-card-text>
            <div class="my-4 subtitle-1">Quantité Restante : {{ product.quantité }} kg </div>
          </v-card-text>
        </v-card>
       
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    products: [
      {
        id: "1",
        nom: "Farine",
        quantité: 1.5,
        img: "./image.jpg",
      },
      {
        id: "2",
        nom: "Produit 2",
        quantité: 1,
        img: "/image.jpg",
      },
      {
        id: "3",
        nom: "Produit 3",
        quantité: 0,
        img: "/image.jpg",
      },
    ],
  }),
};
</script>
