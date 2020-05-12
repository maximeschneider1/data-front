<template>
  <div>
    <v-content fluid>
      <v-container class="container">
        <Header></Header>
        <Informations class="ma-3"></Informations>
       <div class="d-md-flex d-xs-flex-column">
        <v-col cols="5">
          <Alerts isDetail=overview></Alerts>
        </v-col>

        <v-spacer></v-spacer>
        <v-col cols="7">
          <Todo></Todo>
        </v-col>

      </div>
      </v-container>
    </v-content>

  </div>
</template>


<script>
  import Informations from "./Informations";
  import Alerts from "./Alerts";
  import Header from "../AppStructure/Header";
  import Todo from "./Todo";

  export default {
    name: 'Home',

    components: {
      Header,
      Informations,
      Alerts,
      Todo, 
    },

    data: () => ({}
    ),

    methods: {
    }
  }
</script>
<style scoped>

</style>
