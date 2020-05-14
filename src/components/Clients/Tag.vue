<template>
  <v-card outlined class="pa-5 overflow-auto" min-width="20%" >
    <v-row>
      <v-subheader class="pa-200 title">Tags client</v-subheader>
      <v-spacer></v-spacer>
      <v-btn depressed color="#0af" dark @click.stop="dialog = true">+</v-btn>
    </v-row>
    <div class="d-flex flex-wrap">
      <v-list v-for="(items, i) in items" :key="i">
        <v-chip class="pa-2 ma-2" v-text="items.Name"></v-chip>
      </v-list>
    </div>

    <v-dialog v-model="dialog" max-width="500">
      <v-card  class="pa-5">
        <v-card-title class="headline">Ajoutez un tag</v-card-title>

        <v-card-text>Ajouter un tag permet de personnaliser le marketing qui sera fait en direction de ce client.</v-card-text>

          <v-text-field outlined placeholder="Ajoutez un tag" v-model="newTag.name"></v-text-field>

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
  import axios from "axios"
export default {
  name: "Tag",

  data() {
    return {
      newTag: {
        name: "",
        clientID: this.$route.params.id,
      },
      items: [],
      dialog: false
    };
  },
  beforeMount() {
    axios.get("http://localhost:8085/details/tag/" + this.$route.params.id, {
              headers: {
                'content-Type': 'application/json',
                "Accept": "/",
              }
            })
            .then(response => {
              this.items = response.data.data[0];
              if (!response.data.data[0]) {
                /* eslint-disable no-console */
                console.log("No data in response")
              }
            });
  },
  methods: {
    addTag() {
      const qs = require('qs');
      this.items.push({id:5, Name:this.newTag.name, icon:"mdi-glass-wine"})
      axios.post('http://localhost:8085/client/new_tag/' + this.$route.params.id,
              qs.stringify(this.newTag)
      )
    .then(response => {
        if (response.status == 200) {
          this.newTag.name = ''
        } else {
          /* eslint-disable no-console */
          console.log("Couldn't add client to the database")
        }
    })
    },
  }
};
</script>

<style scoped>
.title {
 color: #0af;
 font-size: 1em !important;

}
</style>