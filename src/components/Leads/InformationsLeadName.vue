<template >
        <v-card height="40vh" class="pa-5 my-card">
          <div>
          <v-card-title class="justify-center">{{leadInfo.nom}}</v-card-title>
          <v-card-subtitle>{{leadInfo.phone}}</v-card-subtitle>
          </div>
        </v-card>
        
</template>

<script>
import axios from "axios";
export default {
    name: 'InfoClientLead', 


data() {
    return {
      leadInfo : []
    }
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
        console.log("les infos lead", this.leadInfo)
      });
  }
}
</script>


<style scoped>
.my-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>