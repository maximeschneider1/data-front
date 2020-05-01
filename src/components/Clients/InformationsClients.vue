<template >
  <v-card outlined class="pa-5">
    <v-avatar size="100" round class="ma-3">
      <img src="../../assets/engie-commercial.jpg" />
    </v-avatar>
    <v-card-title class>{{items.nom}}</v-card-title>
    <v-card-subtitle>a_ducaumier@gmail.com</v-card-subtitle>
    <v-btn :elevation="0" color="primary" class="ma-3">
      <v-icon left>{{ icons.facture }}</v-icon>Facture
    </v-btn>
    <v-divider></v-divider>

    <v-card-subtitle>Adresse</v-card-subtitle>
    <v-subheader>{{items.address}}</v-subheader>
    <v-card-subtitle>Ville</v-card-subtitle>
    <v-subheader>{{items.City}}</v-subheader>
    <v-card-subtitle>Première prise de contact</v-card-subtitle>
    <v-subheader>{{items.FirstContact}}</v-subheader>
    <v-card-subtitle>Ville</v-card-subtitle>
    <v-subheader>{{items.City}}</v-subheader>

    <v-card-subtitle>Première prise de contact</v-card-subtitle>
    <v-subheader>{{items.FirstContact}}</v-subheader>

    <!-- <v-row>
      <v-col>
        <v-card-title class="justify-center">Antoine Ducaumier</v-card-title>
          <v-card-subtitle>a_ducaumier@gmail.com</v-card-subtitle>
        <v-card-subtitle>Nom</v-card-subtitle>
        <p>{{items.nom}}</p>
        <v-card-subtitle>Adresse</v-card-subtitle>
        <p>{{items.address}}</p>
      </v-col>

      <v-col>
          <v-card-subtitle>Ville</v-card-subtitle>
          <p>{{items.City}}</p>

          <v-card-subtitle>Première prise de contact</v-card-subtitle>
          <p>{{items.FirstContact}}</p>
       </v-col>

       <v-col>
          <v-card-subtitle>Ville</v-card-subtitle>
          <p>{{items.City}}</p>

          <v-card-subtitle>Première prise de contact</v-card-subtitle>
          <p>{{items.FirstContact}}</p>
       </v-col>
      
    </v-row>-->
  </v-card>
</template>

<script>
export default {
  name: "InfoClient",
  data: () => ({
    items: {
      nom: "Rasputin",
      address: "20 rue oss",
      City: "reims",
      FirstContact: "28/09/10"
    },
    icons: {
      facture: "mdi-text-box-outline"
    }
  })
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
  /* border-radius: 0; */
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}
</style>