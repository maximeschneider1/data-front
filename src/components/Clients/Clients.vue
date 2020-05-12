<template>
  <v-content>
    <v-container>
      <Header/>
      <div class="d-md-flex d-xs-flex-column">
        <v-col cols="5">
          <Alerts isDetail="overview"/>
        </v-col>
        <v-spacer/>
        <v-col cols="7">
          <Todo/>
        </v-col>
      </div>
      <v-card-subtitle class="ml-5 mt-5 pa-0 title">Liste de vos clients</v-card-subtitle>
      <v-card outlined class="pa-5 ma-5">
        <v-card-title>
          <v-spacer/>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          class="dataTable"
          :headers="headers"
          :items="clients"
          @click:row="handleClick"
          :search="search"
        />
      </v-card>
    </v-container>
  </v-content>
</template>
<script>
import Header from "../AppStructure/Header";
import axios from "axios";
import Alerts from "../Home/Alerts";
import Todo from "../Clients/TodoClients";

export default {
  name: "Clients",
  components: {
    Header,
    Alerts,
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
        { text: "Ville", value: "address" },
        { text: "Score Client", value: "score" }
      ],
      clients: []
    };
  },
  methods: {
    handleClick(value) {
      window.location.href = "/clients/detail/" + value.client_id;
    }
  },
  mounted() {
    axios.get("http://localhost:8085/clients_list/1", {
        headers: {
          "content-Type": "application/json",
          Accept: "/"
        }
      })
      .then(response => {
        this.clients = response.data.data[0];
      });
  }
};
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