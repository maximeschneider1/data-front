<template>
    <div>
        <v-subheader>Tendance client</v-subheader>
        <v-card class="pa-5 mx-5" v-if="isLoaded">
<!--            <v-card-text class="max">Scoring overview</v-card-text>-->
            <!-- <v-img
                    :src="require('/Users/max/data-front/src/assets/maquettecrm.png')"
                    class="my-3"
                    contain
            /> -->
                  <apexchart type="area" height="270" :options="chartOptions" :series="series"></apexchart>

            
        </v-card>
        <v-card v-else class="px-5 ma-5" height="350">
           <!-- <v-skeleton-loader
      height="350"
      type="image"
    ></v-skeleton-loader> -->
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
 beforeCreate() {

     axios.get('http://localhost:8085/details/1', {
                headers: {
                  'content-Type': 'application/json',
                  "Accept": "/",
                },
              },
      ).then(response => {
        /* eslint-disable no-console */
        console.log(response.data.FromGenToConsumer)
        this.series[0].data = response.data.FromGenToConsumer
        //this.series[1].data = response.data.FromGenToGrid 
        this.series[1].data = response.data.FromGridToConsumer

        this.isLoaded = true;

        // this.results = response.data.Subscriptions
        // this.nextToken = response.data.NextPageToken
        // this.pagination.total = response.data.TotalResults
        // this.pagination.perPage = response.data.ResultPerPage
      })
 },
 methods: {
    
 }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .yes {
        /*height: available;*/
    }

</style>
