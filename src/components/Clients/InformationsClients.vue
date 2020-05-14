<template >
  <v-card outlined class="pa-5">
    <v-avatar size="100" round class="ma-3">
      <img src="../../assets/engie-commercial.jpg" />
    </v-avatar>
    <v-card-title class>{{infos.name}}</v-card-title>
    <v-card-subtitle>{{infos.Email}}</v-card-subtitle>
    <v-card-subtitle>{{infos.phone}}</v-card-subtitle>
    <v-btn :elevation="0" depressed color="#0af" dark class="ma-3">
      <v-icon left>{{ icons.facture }}</v-icon>Facture
    </v-btn>
    <v-divider></v-divider>

<!--    <v-card-subtitle>Genre</v-card-subtitle>-->
<!--    <v-subheader>{{infos.phone}}</v-subheader>-->
    <v-card-subtitle>Adresse</v-card-subtitle>
    <v-subheader>{{infos.address}}</v-subheader>
    <v-card-subtitle>Ville</v-card-subtitle>
    <v-subheader>{{infos.City}}</v-subheader>
    <v-card-subtitle>Date de naissance</v-card-subtitle>
    <v-subheader>{{infos.BirthDate}}</v-subheader>
    <v-card-subtitle>Première prise de contact</v-card-subtitle>
    <v-subheader>{{infos.AccountCreation}}</v-subheader>
  </v-card>
</template>

<script>
  import axios from "axios"
export default {
  name: "InfoClient",
  data: () => ({
    infos: [],
    icons: {
      facture: "mdi-text-box-outline"
    }
  }),
  mounted() {
    axios.get('http://localhost:8085/details/info/' + this.$route.params.id, {
      headers: {
        'content-Type': 'application/json',
        "Accept": "/",
      }
    }).then(response => {
      this.infos = response.data.data[0]
      this.isLoaded = true;
    })
    }
};
</script>

<style scoped>
.v-card {
  text-align: left;
  overflow: hidden;
}
.v-card__subtitle {
  padding-bottom: 0;
  padding-top: 5%;
}
.v-subheader {
  color: black;
  height: 20%;
}
.v-avatar {
  border-radius: none;
}
.v-card > *:first-child:not(.v-btn):not(.v-chip),
.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip) {
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}
</style>