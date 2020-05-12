<template>
  <v-card outlined class="pa-1 overflow-auto" height="40vh" width="60%">
    <v-card-subtitle class="title">Historique des démarches</v-card-subtitle>
    <div class="d-flex justify-space-around">
      <v-subheader>
        <b>Type</b>
      </v-subheader>
      <v-subheader>
        <b>Date</b>
      </v-subheader>
      <v-subheader>
        <b>Commentaire</b>
      </v-subheader>
    </div>


    <div v-for="(item, i) in items" :key="i" >
      <div class="d-flex justify-space-around color-row"  v-if="i % 2 == 0">
      <v-icon class="row-element">{{ item.Icon }}</v-icon>
      <v-subheader class="row-element">{{ item.Date }}</v-subheader>
      <v-subheader class="row-element">{{ item.Comment }}</v-subheader>
    </div>


    <div v-if="i % 2 != 0" class="d-flex justify-space-around">
      <v-icon class="row-element">{{ item.Icon }}</v-icon>
      <v-subheader class="row-element">{{ item.Date }}</v-subheader>
      <v-subheader class="row-element">{{ item.Comment }}</v-subheader>
    </div>
    </div>


  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "ContactHistory",
  data() {
    return {
      items: []
    };
  },

  mounted() {
    axios.get("http://localhost:8085/leads/history/1", {
        headers: {
          "content-Type": "application/json",
          Accept: "/"
        }
      })
      .then(response => {
        this.items = response.data.data[0];
      }).catch((error) => {
      /* eslint-disable no-console */
        console.log(error);
    })
  }
};
</script>

<style scopped>
.v-application .title {
  text-align: left;
 color: #0af !important;
 font-size: 1em !important;
}
  .color-row {
    background-color: aliceblue;
  }
</style>