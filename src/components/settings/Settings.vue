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
  import Header from "../AppStructure/Header";

  export default {
    name: 'Settings',
    components: {
      Header
    }
  }
</script>