<template>
  <div class="about">
    <v-content>
      <v-container>

        <Header></Header>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import Header from "../components/Header";

  export default {
    name: 'PlanningView',
    components: {
      Header
    }
  }
</script>