<template>
  <v-card outlined class="pa-5 overflow-auto">
    <v-row>
      <v-card-subtitle class="title">Tags du prospect</v-card-subtitle>
      <v-spacer></v-spacer>
      <v-btn color="#0af" rounded  dark @click.stop="dialog = true">+</v-btn>
    </v-row>
    <div class="d-flex flex-wrap">
      <v-list v-for="(items, i) in items" :key="i">
        <v-chip class="pa-2 ma-2" v-text="items.TagContent"></v-chip>
      </v-list>
    </div>

    <v-dialog v-model="dialog" max-width="500">
      <v-card  class="pa-5">
        <v-card-title class="headline">Ajoutez un tag</v-card-title>

        <v-card-text>Ajouter un tag permet de personnaliser le marketing qui sera fait en direction de ce client.</v-card-text>
          <v-text-field outlined placeholder="Ajoutez un tag" v-model="newTag"></v-text-field>

        <v-card-actions>
          <v-btn color="" text @click="dialog = false">Fermer</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="" text @click="dialog = false; addTag()">Ajouter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "LeadTag",

  data() {
    return {
      newTag: '',
      items: [
      
      ],
      dialog: false
    };
  },

  mounted() {
    axios
      .get("http://localhost:8085/leads/tags/1", {
        headers: {
          "content-Type": "application/json",
          Accept: "/"
        }
      })
      .then(response => {
        /* eslint-disable no-console */
        console.log("les infos lead", response);
        this.items = response.data.data[0];
      });
  },

  methods: {
    addTag() {
      this.items.push({id:5, TagContent:this.newTag, icon:"mdi-glass-wine"})
      this.newTag = ''
    }
  }
};
</script>

<style scoped>
.v-application .title {
  text-align: left;
 color: #0af !important;
 font-size: 1em !important;
}

</style>