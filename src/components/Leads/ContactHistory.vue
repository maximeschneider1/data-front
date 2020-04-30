<template>
    <v-card class="pa-1 overflow-auto" height="40vh">
        <v-row class="d-flex justify-space-around">
            <v-subheader><b>Type</b></v-subheader>
            <v-subheader><b>Date</b></v-subheader>
            <v-subheader><b>Commentaire</b></v-subheader>
        </v-row>

        <v-row v-for="(item, i) in items" :key="i" class="d-flex ml-1 justify-space-around">
            <v-icon>{{ item.Icon }}</v-icon>
            <v-subheader>{{ item.Date }}</v-subheader>
            <v-subheader>{{ item.Comment }}</v-subheader>
                      
                    </v-row>

        
    </v-card>
</template>

<script>
import axios from "axios";
export default {
    name: 'ContactHistory', 
    data () {
      return {
          items: [],
      }
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
 
}
</script>

<style>
.v-card {
  /* background-color: aqua;
  font-size: 1em; */
}
p {}

</style>