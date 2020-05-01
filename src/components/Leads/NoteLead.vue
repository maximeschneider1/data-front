<template>
  <v-card outlined class="pa-4 my-card" width="35%">
    <v-card-subtitle class="title pa-0">Notes</v-card-subtitle>
    <v-textarea background-color="grey lighten-2" value="- This is clearable text."></v-textarea>
  </v-card>
</template>

<script>
export default {
  name: "NoteLead"
};
</script>

<style scoped>
.my-card {
  overflow: hidden;
}
.v-application .title {
  text-align: left;
 color: #0af !important;
 font-size: 1em !important;
}
</style>