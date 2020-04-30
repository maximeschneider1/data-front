<template >
  <v-card class="pa-5 my-card">
    <v-card-title class="justify-center">Antoine Ducaumier</v-card-title>
          <v-card-subtitle>a_ducaumier@gmail.com</v-card-subtitle>
<v-card-subtitle>Nom</v-card-subtitle>
        <p>{{items.nom}}</p>
        <v-card-subtitle>Adresse</v-card-subtitle>
        <p>{{items.address}}</p>
<v-card-subtitle>Ville</v-card-subtitle>
          <p>{{items.City}}</p>
 <v-card-subtitle>Première prise de contact</v-card-subtitle>
          <p>{{items.FirstContact}}</p>
          <v-card-subtitle>Ville</v-card-subtitle>
          <p>{{items.City}}</p>

          <v-card-subtitle>Première prise de contact</v-card-subtitle>
          <p>{{items.FirstContact}}</p>





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
      
    </v-row> -->
  </v-card>
</template>

<script>
export default {
  name: "InfoClient",
    data: () => ({

    items:  {
      nom: "Rasputin", 
      address: "20 rue oss", 
      City: "reims", 
    }
  }),
};
</script>

<style scoped>
  .v-card {
    text-align: left;
  }
</style>