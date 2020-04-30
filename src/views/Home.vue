<template>
  <div>
    <v-content fluid>
      <v-container class="container">
        <Header></Header>
        <Informations></Informations>
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
  import Informations from "../components/Home/Informations";
  import Alerts from "../components/Home/Alerts";
  import Header from "../components/Header";
  import Todo from "../components/Todo";

  export default {
    name: 'Home',

    components: {
      Header,
      Informations,
      Alerts,
      Todo, 
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

  /* .container {
    height: 100vh;
  }
  .uuu {
    width: 40%;
  }
  .aaa {
    width: 60%;
  } */
</style>
