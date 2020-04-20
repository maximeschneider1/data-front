<template>
  <v-card class="pa-5 ma-2" >
      <v-card-subtitle>Tags client</v-card-subtitle>
    <div class="d-flex flex-wrap">
    <v-list v-for="(items, i) in items" :key="i"> 
          <v-chip class="pa-2 ma-2" v-text="items.text"></v-chip>  
    </v-list>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Tag", 

   data() {
       return {
           items: [
      {
          id: 1,
        text: "Nature",
        icon: "mdi-nature"
      },
      {
          id: 2,
        text: "Nightlife",
        icon: "mdi-glass-wine"
      }, 
      {
          id: 3,
        text: "Nightlife",
        icon: "mdi-glass-wine"
      }, 
      {
          id: 4,
        text: "Nightlife",
        icon: "mdi-glass-wine"
      }
    ],
       }
   },
};
</script>

<style>
</style>