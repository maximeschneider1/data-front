<template>
  <v-content>
    <v-container>
      <Header/>
      <div class="d-md-flex d-xs-flex-column">
        <v-col class="ma-0 pa-0" cols="5">
          <ScoringLead/>
        </v-col>
        <v-spacer/>
        <v-col class="ma-0 pa-0" cols="7">
          <Todo/>
        </v-col>
      </div>
      <v-card-subtitle class="ml-5 mt-5 pa-0 title">Liste de vos prospects</v-card-subtitle>
      <v-card outlined class="pa-5 ma-5">
        <v-card-title>
          <v-btn class="ml-5" depressed color="#0af" rounded  dark>+</v-btn>
          <v-spacer/>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table class="dataTable" :headers="headers" :items="clients" @click:row="handleClick" :search="search"/>
      </v-card>
    </v-container>
  </v-content>
</template>
<script>
import Header from "../AppStructure/Header";
import ScoringLead from "./ConversionGraph";
import axios from "axios";
import Todo from "../Leads/TodoLead";
export default {

    name: 'Prospects', 
    components: {
    Header, 
    ScoringLead, 
    Todo
  },

  data() {
    return {
      search: "",
      headers: [
        {
          align: "start",
          sortable: false,
        },
        { text: "Nom", value: "name" },
        { text: "Phone", value: "phone" },
        { text: "Ville", value: "City" },
        { text: "Etat de la démarche", value: "StepConverted" },
        { text: "Score lead", value: "score" },
      ],
      clients: [

      ], 
    };
    
  },
  mounted() {
    axios.get("http://localhost:8085/leads_list/1", {
      headers: {
        "content-Type": "application/json",
        Accept: "/"
      }
    })
            .then(response => {
              /* eslint-disable no-console */
              console.log("Ligne :", response.data.data[0]);
              this.clients = response.data.data[0];
            });
  },
  methods: {
    handleClick(value) {
      window.location.href = "/prospects/detail/" + value.lead_id;
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