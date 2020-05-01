<template>
    <div>
        <v-subheader class="title">Scoring de vos leads</v-subheader>
        <v-card outlined class="pa-5 mx-5 mb-5 overflow-auto" v-if="isLoaded" height="50vh">
<!--            <v-card-text class="max">Scoring overview</v-card-text>-->
            <!-- <v-img
                    :src="require('/Users/max/data-front/src/assets/maquettecrm.png')"
                    class="my-3"
                    contain
            /> -->
                  <apexchart type="bar" height="270"  :options="chartOptions" :series="series"></apexchart>

            
        </v-card>
        <v-card v-else class="px-5 ma-5" height="50vh">
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
 name: 'ScoringLead',
 
 data: function () {
  return {
   chartOptions: {
    series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
          chart: {
          type: 'bar',

          toolbar: false, 
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Score 1', 'Score 2', 'Score 3', 'Score 4', 'Score 5',
          ],
        }
   },
   isLoaded: false,
   
   series: [{
            name: 'FromGenToConsumer',
            data: [100, 200, 600, 400]
          },
        //    {
        //     name: 'FromGenToGrid',
        //     data: []
        //   }, 
          {
            // name: 'FromGridToConsumer',
            // data: []
          },],
  }
 },
 beforeCreate() {

     axios.get('http://localhost:8085/details/production/1', {
                headers: {
                  'content-Type': 'application/json',
                  "Accept": "/",
                },
              },
      ).then(response => {
        /* eslint-disable no-console */
        console.log(response.data.FromGenToConsumer)
        // this.series[0].data = response.data.FromGenToConsumer
        //this.series[1].data = response.data.FromGenToGrid 
        // this.series[1].data = response.data.FromGridToConsumer

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
    .v-application .title {
  text-align: left;
 color: #0af !important;
 font-size: 1em !important;
}

</style>
