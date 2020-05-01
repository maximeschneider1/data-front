<template>
  <div class="d-flex justify-space-between">
    <v-card outlined class="mb-5 mr-5 pt-3" width="20%">
      <v-icon color="blue" class="pa-2">mdi-text-box-outline</v-icon>
      <v-card-title class="pa-0 justify-center">23</v-card-title>
      <p>kWh produits</p>
    </v-card>

    <v-card outlined class="mb-5 mr-5 pt-3" width="20%">
      <v-icon color="blue" class="pa-2">mdi-text-box-outline</v-icon>
      <v-card-title class="pa-0 justify-center">{{leadInfo.score}}</v-card-title>
      <p>Score</p>
    </v-card>

    <v-card outlined class="mb-5 mr-5 pt-3" width="20%">
      <v-icon color="blue" class="pa-2">mdi-text-box-outline</v-icon>
      <v-card-title class="pa-0 justify-center">{{leadInfo.OpenedEmails}}</v-card-title>
      <p>Mails ouvert</p>
    </v-card>

    <v-card outlined class="mb-5 mr-5 pt-3" width="20%">
      <v-icon color="blue" class="pa-2">mdi-text-box-outline</v-icon>
      <v-card-title class="pa-0 justify-center">{{leadInfo.Profitability}}</v-card-title>
      <p>Gains avec EmP</p>
    </v-card>

        <v-card outlined class="mb-5 pt-3" width="20%">
      <v-icon color="blue" class="pa-2">mdi-text-box-outline</v-icon>
      <v-card-title class="pa-0 justify-center">{{leadInfo.ContentDownloaded}}</v-card-title>
      <p>Document téléchargés</p>
    </v-card>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "KPILead",
  data() {
    return {
      leadInfo: []
    };
  },

  mounted() {
    axios
      .get("http://localhost:8085/leads/info/1", {
        headers: {
          "content-Type": "application/json",
          Accept: "/"
        }
      })
      .then(response => {
        this.leadInfo = response.data;

        /* eslint-disable no-console */
        console.log("les infos lead", this.leadInfo);
      });
  }
};
</script>

<style scoped>

.v-card p {
  margin-bottom: 5%;
}

.v-card  {
  color: #0af !important;
}

</style>