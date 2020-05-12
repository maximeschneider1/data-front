<template>
  <div>
    <v-subheader class="title">Etat général</v-subheader>
    <div class="d-flex justify-space-between">

      <v-card outlined class="mb-5 mr-5 pt-3" width="20%">
        <v-icon color="blue" class="pa-2">mdi-account-group</v-icon>
        <v-card-title class="pa-0 justify-center">{{items.TotalClients}}</v-card-title>
        <p>Total clients</p>
      </v-card>

      <v-card outlined class="mb-5 mr-5 pt-3" width="20%">
        <v-icon color="blue" class="pa-2">mdi-folder</v-icon>
        <v-card-title class="pa-0 justify-center">{{items.NewDocuments}}</v-card-title>
        <p>Nouveaux documents</p>
      </v-card>


      <v-card outlined class="mb-5 mr-5 pt-3" width="20%">
        <v-icon color="blue" class="pa-2">mdi-account-clock</v-icon>
        <v-card-title class="pa-0 justify-center">{{items.Todo}}</v-card-title>
        <p>Démarche en cours</p>
      </v-card>

      <v-card outlined class="mb-5 mr-5 pt-3" width="20%">
        <v-icon color="blue" class="pa-2">mdi-account-search</v-icon>
        <v-card-title class="pa-0 justify-center">{{items.NewLeads}}</v-card-title>
        <p>Nouveaux leads</p>
      </v-card>

            <v-card outlined class="mb-5 mr-5 pt-3" width="20%">
        <v-icon color="blue" class="pa-2">mdi-account-cash</v-icon>
        <v-card-title class="pa-0 justify-center">{{items.PotentialValue}}€</v-card-title>
        <p>Valeure potentielle</p>
      </v-card>

      

    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Informations",

  components: {},

  data: () => ({
    items: [],
    icon: "mdi-clock"
  }),
  beforeCreate() {
    axios
      .get("http://localhost:8085/home/5", {
        headers: {
          "content-Type": "application/json",
          Accept: "/"
        }
      })
      .then(response => {
        this.items = response.data.data[0];
      }).catch((error) => {
        throw new Error('Problem getting ressource', error);
    })
  },

  methods: {}
};
</script>

<style scoped>
.title {
  color: #0af;
  font-size: 1em !important;
}
</style>
