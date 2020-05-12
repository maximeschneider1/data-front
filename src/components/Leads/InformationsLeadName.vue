<template >
    <v-card outlined class="pa-5 my-card" height="100%">

      <v-avatar size="100" round class="ma-3">
        <img src="../../assets/engie-commercial.jpg" />
      </v-avatar>

      <v-card-title class>{{leadInfo.name}}</v-card-title>
      <v-card-subtitle>{{leadInfo.email}}</v-card-subtitle>

      <v-card-subtitle class="py-0">Téléphone</v-card-subtitle>
      <v-subheader>{{leadInfo.phone}}</v-subheader>

      <v-divider/>

      <v-card-subtitle class="pb-0"> Adresse</v-card-subtitle>
      <v-subheader>{{leadInfo.address}}</v-subheader>

      <v-card-subtitle class="py-0">Ville</v-card-subtitle>
      <v-subheader>{{leadInfo.City}}</v-subheader>


      <v-card-subtitle class="py-0">Première prise de contact</v-card-subtitle>
      <v-subheader>{{leadInfo.FirstContact}}</v-subheader>
    </v-card>

</template>

<script>
import axios from "axios";
export default {
  name: "InfoClientLead",

  data() {
    return {
      leadInfo: []
    };
  },

  mounted() {
    axios
      .get("http://localhost:8085/leads/info/" + this.$route.params.id, {
        headers: {
          "content-Type": "application/json",
          Accept: "/"
        }
      })
      .then(response => {
        this.leadInfo = response.data.data[0];

        /* eslint-disable no-console */
        console.log("les infos lead", this.leadInfo);
      });
  }
};
</script>


<style scoped>
.my-card {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: left;
}
.v-card > *:first-child:not(.v-btn):not(.v-chip),
.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip) {
  /* border-radius: 0; */
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

.v-subheader {
  color: black;
  /* height: 20%; */
}


</style>