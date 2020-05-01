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

    <div v-for="(item, i) in items" :key="i" class="d-flex justify-space-around">
      <v-icon class="row-element">{{ item.Icon }}</v-icon>
      <v-subheader class="row-element">{{ item.Date }}</v-subheader>
      <v-subheader class="row-element">{{ item.Comment }}</v-subheader>
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
    axios
      .get("http://localhost:8085/leads/history/1", {
        headers: {
          "content-Type": "application/json",
          Accept: "/"
        }
      })
      .then(response => {
        this.items = response.data;
      });
  }
};
</script>

<style scopped>
.row-element {
  /* background-color: aqua !important; */
}

.v-application .title {
  text-align: left;
 color: #0af !important;
 font-size: 1em !important;
}

</style>