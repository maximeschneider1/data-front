<template >
  <v-card class="pa-5 my-card" height="40vh">
    <v-row>
      <v-col>
        <v-card-subtitle>Nom</v-card-subtitle>
        <p>{{leadInfo.nom}}</p>
        <v-card-subtitle>Adresse</v-card-subtitle>
        <p>{{leadInfo.address}}</p>
      </v-col>

      <v-col>
          <v-card-subtitle>Ville</v-card-subtitle>
          <p>{{leadInfo.City}}</p>

          <v-card-subtitle>Première prise de contact</v-card-subtitle>
          <p>{{leadInfo.FirstContact}}</p>
       </v-col>

       <v-col>
          <v-card-subtitle>Ville</v-card-subtitle>
          <p>{{leadInfo.City}}</p>

          <v-card-subtitle>Première prise de contact</v-card-subtitle>
          <p>{{leadInfo.FirstContact}}</p>
       </v-col>
      
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "InfoLead",

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
.my-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>