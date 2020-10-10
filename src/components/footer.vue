<template>

      <v-footer padless>
        <v-card class="flex">
          <v-card-title class="darken-1 display-2">
            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-footer>
    
</template>

<script>
export default {
    name: "footer",
 
    data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  

}
</script>

<style>

</style>