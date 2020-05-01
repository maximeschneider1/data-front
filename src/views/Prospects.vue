<template>
  <v-content>
    <v-container>
      <Header></Header>
      <div class="d-md-flex d-xs-flex-column">
        <v-col class="ma-0 pa-0" cols="5">
          <ScoringLead></ScoringLead>
        </v-col>

        <v-spacer></v-spacer>
        <v-col class="ma-0 pa-0" cols="7">
          <Todo></Todo>
        </v-col>

      </div>
      <v-card-subtitle class="ml-5 pa-0 title">Liste de vos prospects</v-card-subtitle>
      <v-card outlined class="pa-5 ma-5">
        <v-card-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table class="dataTable" :headers="headers" :items="clients" @click:row="handleClick" :search="search"></v-data-table>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import Header from "../components/Header";
import ScoringLead from "../components/Leads/ScoringLeadGraph";
import Todo from "../components/Todo";
export default {

    name: 'Prospects', 
    components: {
    Header, 
    ScoringLead, 
    Todo
  },

  data() {
    return {
      url: "instagram.com",
      search: "",
      headers: [
        {
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Nom", value: "nom" },
        { text: "Phone", value: "phone" },
        { text: "Ville", value: "ville" },
        { text: "Etat de la démarche", value: "etat" },
        { text: "Score lead", value: "score" },
      ],
      clients: [
        {
          nom: "Jean Patie", 
          phone: "06267678", 
          ville: "Reims", 
          etat : "En cours", 
          score: "4", 
        }
      ], 
    };
    
  },
  methods: {
    handleClick(value) {
      /* eslint-disable no-console */
       console.log("Ligne :", value);
      window.location.href = "/prospects/detail";
    }
  },

}
</script>

<style>
.dataTable {
  cursor: pointer;
}
.v-application .title {
  text-align: left;
 color: #0af !important;
 font-size: 1em !important;
}

</style>