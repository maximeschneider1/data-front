<template>
  <v-content>
    <v-container>
      <Header></Header>
      <v-subheader>Listes de vos clients</v-subheader>
      <v-card class="pa-5 ma-5">
          <v-simple-table>
    <template v-slot:default>
      <thead>
              <tr>
                <th class="text-left">Name</th>
                 <th class="text-left">Phone</th>
                <th class="text-left">Production</th>
                <th class="text-left">État de la démarche</th>
                <th class="text-left">Score client</th>
              </tr>
            </thead>
            <tbody>
              <!-- <a :href="'https://www.ncbi.nlm.nih.gov/pubmed/'"> -->
              <tr v-for="item in desserts" :key="item.nom">
                <a href="">
                <td>{{ item.nom }}</td>
                <td>{{ item.phone }}</td>
                </a>
              </tr>
              <!-- </a> -->
            </tbody>
                </template>
  </v-simple-table>
      </v-card>
    </v-container>
  </v-content>
</template>
<script>
  import Header from "../components/Header";
  import axios from 'axios';

  export default {
    name : 'Clients',
    components: {
      Header
    },

    data () {
      return {
        desserts : [
          
        ]
      }
    },
    mounted() {
      axios.get('http://localhost:8085/clients/1', {
                headers: {
                  'content-Type': 'application/json',
                  "Accept": "/",
                },
              },
      ).then(response => {
        /* eslint-disable no-console */
        console.log(response)
        this.desserts = response.data
        // this.results = response.data.Subscriptions
        // this.nextToken = response.data.NextPageToken
        // this.pagination.total = response.data.TotalResults
        // this.pagination.perPage = response.data.ResultPerPage
      })
    }
  }
</script>