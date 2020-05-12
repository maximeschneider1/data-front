<template>

  <div class="">
    <v-card outlined class="pa-5 overflow-auto detail" v-if="items">
       <v-subheader class="title">Alertes du client</v-subheader>

      <v-row class="d-flex justify-space-around " v-for="(item, io) in items" :key="io">
        <v-row class="white-row" v-if="io % 2 == 0">
          <v-icon class="ml-5">mdi-bell-outline</v-icon>
          <div class="alert-text-wrapper" @click="linkToClient(item)">
            <v-subheader>{{item.motif}}</v-subheader>
          </div>
          <v-btn icon>
            <v-icon @click="deleteItem(item)">mdi-trash-can-outline</v-icon>
          </v-btn>
        </v-row>

        <v-row class="color-row" v-if="io % 2 != 0">
          <v-icon class="ml-5">mdi-bell-outline</v-icon>
          <div class="alert-text-wrapper" @click="linkToClient(item)">
            <v-subheader>{{item.motif}}</v-subheader>
          </div>
          <v-btn icon>
            <v-icon @click="deleteItem(item)">mdi-trash-can-outline</v-icon>
          </v-btn>
        </v-row>
      </v-row>
    </v-card>
    <v-card v-else outlined height="20vh">
      <v-subheader class="title">Alertes du client</v-subheader>
      <v-row class="d-flex justify-space-around ">
<!--        <v-row class="white-row">-->
          <div class="alert-text-wrapper">
            <v-subheader>Pas d'alertes à afficher pour ce client</v-subheader>
          </div>
        </v-row>

    </v-card>
  </div>

</template>


<script>
import axios from "axios";
export default {
  name: "ClientsAlerts",

  components: {},

  data: () => ({
    alert: "",
    delete: "",
    items: []
  }),

  beforeMount() {
    axios
      .get("http://localhost:8085/clients/alerts/" + this.$route.params.id, {
        headers: {
          'content-Type': 'application/json',
          "Accept": "/",
        }
      })
      .then(response => {
        this.items = response.data.data[0];
        /* eslint-disable no-console */
        console.log("non y'a rien", response)
        if (!response.data.data[0]) {
          /* eslint-disable no-console */
          console.log("non y'a rien")
        }
      }).catch(error => {
        console.error(error)
        this.items.motif = "Impossible de retourner la liste des alertes"
        ;});
  },

  methods: {
    deleteItem(item) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].alert_id === item.alert_id) {
          this.items.splice(i, 1);
        }
      }
    },
    linkToClient(item) {
      window.location.href = "/clients/detail/" + item.client_id;
    }
  }
};
</script>

<style scoped>
.alert-text-wrapper {
  margin-right: 10%;
  text-align: left;
  width: 100%;
  overflow: hidden;
}

.color-row {
  justify-content: space-around;
  margin: 5px;
  margin-left: 0px;
  background-color: aliceblue;
  border-radius: 10px;
  cursor: pointer;
}

.white-row {
  justify-content: space-around;
  margin: 5px;
  margin-left: 0px;
  /* background-color: aliceblue; */
  border-radius: 10px;
  cursor: pointer;
}

.detail {
  height: 30vh;
}

.row {
  flex-wrap: nowrap;
}
.title {
 color: #0af;
 font-size: 1em !important;

}


</style>
