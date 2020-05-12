<template>
  <div class="d-flex cont">
    <div align="center" justify="center" class="my-cols">

      <v-card outlined class="mb-10 mr-5 pt-3">
        <v-icon color="blue" class="pa-1">mdi-crown-outline</v-icon>
        <v-card-title class="pa-0 justify-center">{{productionInfo.Score}}</v-card-title>
        <p>Score client</p>
      </v-card>

      <v-card outlined class="mb-10 mr-5 pt-3">
        <v-icon color="blue" class="pa-1">mdi-trophy-outline</v-icon>
        <v-card-title class="pa-0 justify-center">{{clientInfo.challengesDone}}</v-card-title>
        <p>Challenges réalisés</p>
      </v-card>

      <v-card outlined class="mb-10 mr-5 pt-3">
        <v-icon color="blue" class="pa-1">mdi-trending-up</v-icon>
        <v-card-title class="pa-0 justify-center">{{productionInfo.TotalProduction}} kWh</v-card-title>
        <p>produits</p>
      </v-card>

    </div>
    <div class="my-cols">

      <v-card outlined class="mb-10 mr-5 pt-3">
        <v-icon color="blue" class="pa-1">mdi-file-document-outline</v-icon>
        <v-card-title class="pa-0 justify-center">{{clientInfo.LastBill}} €</v-card-title>
        <p>Facture moyenne</p>
      </v-card>

      <v-card outlined class="mb-10 mr-5 pt-3">
        <v-icon color="blue" class="pa-1">mdi-devices</v-icon>
        <v-card-title class="pa-0 justify-center">{{clientInfo.RegistredDevices}}</v-card-title>
        <p>Appareils enregistrés</p>
      </v-card>

      <v-card outlined class="mb-10 mr-5 pt-3">
        <v-icon color="blue" class="pa-1">mdi-weather-sunny</v-icon>
        <v-card-title class="pa-0 justify-center">{{productionInfo.AutoConsumption}}%</v-card-title>
        <p>Auto-consommation</p>
      </v-card>
      
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "KPIClients", 
    data() {
    return {
      productionInfo: [],
      clientInfo: []
    };
  },
  
    mounted() {
    axios
      .get("http://localhost:8085/details/production/" + this.$route.params.id, {
        headers: {
          "content-Type": "application/json",
          Accept: "/"
        }
      })
      .then(response => {
        this.productionInfo = response.data.data[0]
        /* eslint-disable no-console */
        console.log("Response PROD", response.data.data[0])
      });

      axios.get('http://localhost:8085/details/info/' + this.$route.params.id, {
        headers: {
          'content-Type': 'application/json',
          "Accept": "/",
        }
      }).then(response => {
        this.clientInfo = response.data.data[0]
        /* eslint-disable no-console */
        console.log("Response INFO", response.data.data)
      })
  }

};
</script>

<style scoped>
.my-cols {
  width: 100%;
}
.cont {
  height: 100%;
}

.v-card {
  height: 27%;
  color: #0af !important;
}

</style>