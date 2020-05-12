<template>
    <div>
        <v-subheader class="title">Pourcentage de conversion</v-subheader>
        <!--              v-if="isLoaded" -->
        <v-card outlined class="pa-5 mx-5 mb-5 overflow-auto"

                height="50vh">
                  <apexchart type="area" height="270"  :options="chartOptions" :series="series"></apexchart>
        </v-card>

<!--        <v-card v-else class="px-5 ma-5" height="50vh">-->
<!--        </v-card>-->
    </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
// import axios from 'axios';
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
          categories: ['Avril', 'Mai', 'Juin', 'Juillet', 'Août',
          ],
        }
   },
   // isLoaded: false,
   series: [{
            name: 'Taux de conversion',
            data: [35, 45, 50, 45, 40]
          },
   ],
  }
 },
 beforeCreate() {
     // axios.get('http://localhost:8085/details/production/1', {
     //            headers: {
     //              'content-Type': 'application/json',
     //              "Accept": "/",
     //            },
     //          },
     //  ).then(response => {
     //    /* eslint-disable no-console */
     //    console.log(response.data.FromGenToConsumer)
     //    this.isLoaded = true;
     //  })
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
