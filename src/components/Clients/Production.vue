<template>
  <div>
    <v-card outlined class="pa-5 mr-6" v-if="isLoaded">
      <v-subheader @click="tellme()" class="title">Tendance client</v-subheader>
      <v-btn-toggle
              v-model="icon"
              borderless
      >
        <v-btn value="left">
          <span class="hidden-sm-and-down">Semaine</span>
        </v-btn>
        <v-btn value="center">
          <span class="hidden-sm-and-down">Mois</span>
        </v-btn>
        <v-btn value="right">
          <span class="hidden-sm-and-down">Année</span>
        </v-btn>
      </v-btn-toggle>
      <apexchart type="area" height="300" :options="chartOptions" :series="series"></apexchart>
    </v-card>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import axios from "axios";
import Vue from "vue";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);
export default {
  name: "Production",
  data: function() {
    return {
      chartOptions: {
        chart: {
          toolbar: false,
          id: "vuechart"
        },
        xaxis: {
          categories: [
            "Mars",
            "Avril",
            "Mai",
            "Juin",
            "Juillet",
            "Août",
            "Septembre",
            "Octobre"
          ]
        }
      },
      isLoaded: false,
      series: [
        {
          name: "Production",
          data: []
        },
        {
          name: "Achat",
          data: []
        }]};
  },
  mounted() {
    axios.get(
        "http://localhost:8085/details/production/" + this.$route.params.id,
        {
          headers: {
            "content-Type": "application/json",
            Accept: "/"
          }
        }
      )
      .then(response => {
        this.series[0].data = response.data.data[0].FromGenToConsumer;
        this.series[1].data = response.data.data[0].FromGridToConsumer;
        this.isLoaded = true;
      });
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: #0af;
  font-size: 1em !important;
}

.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {
  height: 20px;
  text-align: right;
}
.toggle {
  text-align: right;
}
</style>
