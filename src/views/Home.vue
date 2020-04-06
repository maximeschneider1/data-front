<template>
  <div>
    <v-content fluid>
      <v-container class="container">
        <Header></Header>
        <div class="d-flex justify-space-between">
          <div class="aaa" >
            <ScoringOverview></ScoringOverview>
            <Planning></Planning>
<!--            <v-card class="pa-5 ma-5"><v-card-text class="max">Module planning</v-card-text></v-card>-->
          </div>
          <div class="uuu">
              <Informations></Informations>
            <Alerts></Alerts>
<!--            <v-card class="pa-5 ma-5">Alerte clients</v-card>-->
          </div>
        </div>
      </v-container>
    </v-content>

  </div>
</template>


<script>
  import ScoringOverview from "../components/Home/ScoringOverview";
  import Informations from "../components/Home/Informations";
  import Alerts from "../components/Home/Alerts";
  import Planning from "../components/Home/Planning";
  import Header from "../components/Header";

  export default {
    name: 'Home',

    components: {
      Header,
      ScoringOverview,
      Informations,
      Alerts,
      Planning,
    },

    data: () => ({
            }

    ),

    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .container {
    height: 100vh;
  }
  .uuu {
    width: 40%;
  }
  .aaa {
    width: 60%;
  }
</style>
