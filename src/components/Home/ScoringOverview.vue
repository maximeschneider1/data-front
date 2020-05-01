<template>
    <div>
        
        <v-card outlined class="pa-5 mr-6" v-if="isLoaded">
        <v-subheader @click="tellme()" class="title">Tendance client</v-subheader>
<!--            <v-card-text class="max">Scoring overview</v-card-text>-->
            <!-- <v-img
                    :src="require('/Users/max/data-front/src/assets/maquettecrm.png')"
                    class="my-3"
                    contain
            /> -->
                  <apexchart type="area" height="300" :options="chartOptions" :series="series"></apexchart>

            
        </v-card>
    </div>
</template>


<script>
import VueApexCharts from 'vue-apexcharts'
import axios from 'axios';
import Vue from 'vue'

Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

export default {
 name: 'ScoringOverview',
//  props: [
//    'client_id'
//  ], 
 data: function () {
  return {
   chartOptions: {
    chart: {
        toolbar: false, 
        id: 'vuechart',
    },
    xaxis: {
      categories: ["Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre"],
    },
   },
   isLoaded: false, 
   series: [{
            name: 'FromGenToConsumer',
            data: []
          },
        //    {
        //     name: 'FromGenToGrid',
        //     data: []
        //   }, 
          {
            name: 'FromGridToConsumer',
            data: []
          },],
  }
 },
 beforeMount() {
    if (!this.client_id) {
       /* eslint-disable no-console */
    console.log("ont att")
    } else {
/* eslint-disable no-console */
    console.log("ont gooooo")
    }
 }, 
 
 mounted() {
   /* eslint-disable no-console */
    console.log("client id est", this.client_id)
     axios.get('http://localhost:8085/details/production/' + this.$route.params.id, {
                headers: {
                  'content-Type': 'application/json',
                  "Accept": "/",
                },
              },
      ).then(response => {
        this.series[0].data = response.data.FromGenToConsumer
        this.series[1].data = response.data.FromGridToConsumer

        this.isLoaded = true;

        // this.results = response.data.Subscriptions
        // this.nextToken = response.data.NextPageToken
        // this.pagination.total = response.data.TotalResults
        // this.pagination.perPage = response.data.ResultPerPage
      })
 },
 methods: {
   tellme(){
     /* eslint-disable no-console */
    console.log("tell me if ", this.client_id)
   }
    
 }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .title {
 color: #0af;
 font-size: 1em !important;

}

</style>
