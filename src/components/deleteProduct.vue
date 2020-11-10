<template>
  <div class="text-center">
    <v-dialog v-model="open">
      <v-card>
        <v-alert type="warning" v-if="messageOkSuppress != ''">{{
          messageOkSuppress
        }}</v-alert>
        <v-alert type="error" v-if="messageErrorSuppress != ''">{{
          messageErrorSuppress
        }}</v-alert>
        <v-card-title class="headline red lighten-2"
          ><v-icon>mdi-cloud-alert</v-icon>
          Attention
        </v-card-title>
        <v-card-text>
          <v-icon>mdi-error</v-icon>
          Êtes-vous sûr de vouloir supprimer {{ product.name }} ?
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            class="ma-2"
            color="orange"
            label
            outlined
            @click.prevent="deleteProduct(product)"
          >
            J’accepte
          </v-btn>

          <v-btn
            color="grey"
            class="ma-2"
            label
            outlined
            @click.prevent="
              close();
              initMessage();
            "
            router
            to="/"
            >retour</v-btn
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
  props: ["product", "open", "close"],
  data() {
    return {};
  },
  computed: {
    ...mapState(["messageOkSuppress", "messageErrorSuppress"]),
  },

  methods: {
    deleteProduct(product) {
      this.$store.dispatch("deleteProduct", product);
    },
    initMessage() {
      this.$store.dispatch("initDeleteMessage");
    },
  },
};
</script>

<style>
</style>