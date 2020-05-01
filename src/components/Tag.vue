<template>
  <v-card outlined class="pa-5 overflow-auto" min-width="20%"  height="33%">
    <v-row>
      <v-subheader class="pa-200 title">Tags client</v-subheader>
      <v-spacer></v-spacer>
      <v-btn color="primary" dark @click.stop="dialog = true">+</v-btn>
    </v-row>
    <div class="d-flex flex-wrap">
      <v-list v-for="(items, i) in items" :key="i">
        <v-chip class="pa-2 ma-2" v-text="items.text"></v-chip>
      </v-list>
    </div>

    <v-dialog v-model="dialog" max-width="500">
      <v-card  class="pa-5">
        <v-card-title class="headline">Ajoutez un tag</v-card-title>

        <v-card-text>Ajouter un tag permet de personnaliser le marketing qui sera fait en direction de ce client.</v-card-text>

          <v-text-field outlined placeholder="Ajoutez un tag" v-model="newTag"></v-text-field>

        <v-card-actions>
          <v-btn color="" text @click="dialog = false">Fermer</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="" text @click="dialog = false; addTag()">Ajouter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "Tag",

  data() {
    return {
      newTag: '',
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
      dialog: false
    };
  },
  methods: {
    addTag() {
      // eslint-disable-next-line no-console
      console.log("newtag is", this.newTag)
      this.items.push({id:5, text:this.newTag, icon:"mdi-glass-wine"})
      this.newTag = ''
    }
  }
};
</script>

<style scoped>
.title {
 color: #0af;
 font-size: 1em !important;

}
</style>