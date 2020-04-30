<template>
  <v-row>
    <div>
      <div class="first-part d-flex">
        <div class="my-card">
          <div>
            <v-card class="pa-2 mt-3 my-card" width="200" height="18vh">
              <div>
                <v-card-title class="justify-center">{{leadInfo.score}}</v-card-title>
                <v-card-subtitle>Score</v-card-subtitle>
              </div>
            </v-card>
            <v-card class="pa-2 my-7 mb-0 my-card" width="200" height="18vh">
              <div>
                <v-card-title class="justify-center">{{leadInfo.OpenedEmails}}</v-card-title>
                <v-card-subtitle>Mails ouverts</v-card-subtitle>
              </div>
            </v-card>
          </div>
        </div>
      </div>
      <div class="first-part d-flex">
        <div class="my-card">
          <div>
          <v-card class="pa-2 mt-12 my-card" height="18vh">
            <div>
              <v-card-title class="justify-center">{{leadInfo.Profitability}}</v-card-title>
              <v-card-subtitle>Gains avec EmP</v-card-subtitle>
            </div>
          </v-card>

          <v-card class="pa-2 mt-8 my-card" height="18vh">
            <div>
              <v-card-title class="justify-center">{{leadInfo.ContentDownloaded}}</v-card-title>
              <v-card-subtitle>Document téléchargés</v-card-subtitle>
            </div>
          </v-card>
        </div>
        </div>
      </div>
    </div>
  </v-row>
  <!-- <v-row>
      <div class="d-flex">
        <v-card class="pa-2 ma-2">
          <v-card-title class="justify-center">23</v-card-title>
          <v-card-subtitle>kWh produits</v-card-subtitle>
        </v-card>
        <v-card class="pa-2 ma-2">
          <v-card-title class="justify-center">23</v-card-title>
          <v-card-subtitle>kWh produits</v-card-subtitle>
        </v-card>
      </div>
  </v-row>-->

  <!-- <v-row>
      <div class="d-flex">
        <v-card class="pa-2 ma-2">
          <v-card-title class="justify-center">23</v-card-title>
          <v-card-subtitle>kWh produits</v-card-subtitle>
        </v-card>
        <v-card class="pa-2 ma-2">
          <v-card-title class="justify-center">23</v-card-title>
          <v-card-subtitle>kWh produits</v-card-subtitle>
        </v-card>
      </div>
  </v-row>-->
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
.first-part {
  /* height: 40vh; */
  /* margin: 10% */
}
.my-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>