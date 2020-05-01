<template>
<div>
    <v-subheader>Informations</v-subheader>
    <div>
        <v-row>
            <v-card outlined class="pa-5 ma-5">
                <v-icon>{{ icon }}</v-icon>
                <h3>{{items.TotalClients}}</h3>
                <v-subheader>Total clients</v-subheader>
            </v-card>
            <v-card  outlined class="pa-5 ma-5 ">
                <v-icon>{{icon }}</v-icon>
                <h3>{{items.Todo}}</h3>
                <v-subheader>Choses à faire</v-subheader>
            </v-card>
        
            <v-card outlined  class="pa-5 ma-5 ">
                <v-icon>{{icon }}</v-icon>
                <h3>{{items.NewLeads}}</h3>
                <v-subheader>Nouveaux leads</v-subheader>
            </v-card>
            <v-card  outlined class="pa-5 ma-5">
                <v-icon>{{icon }}</v-icon>
                <h3>{{items.NewDocuments}}</h3>
                <v-subheader>Nouveaux documents</v-subheader>
            </v-card>
            <v-card  outlined class="pa-5 ma-5">
                <v-icon>{{icon }}</v-icon>
                <h3>{{items.PotentialValue}}</h3>
                <v-subheader>Valeure potentielle</v-subheader>
            </v-card>
        </v-row>
    </div>
</div>
</template>


<script>
import axios from "axios";
    export default {
        name: 'Informations',

        components: {
        },

        data: () => ({
                items: [], 
                icon: "mdi-clock"
            }

        ),
        beforeCreate() {
    axios
      .get("http://localhost:8085/home/5", {
        headers: {
          "content-Type": "application/json",
          Accept: "/"
        }
      })
      .then(response => {
        this.items = response.data;
      });
  },

        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* .row {
        flex-wrap: nowrap;

    } */

</style>
