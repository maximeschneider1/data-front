<template>
  <div>
    <v-subheader class="title">Tâches</v-subheader>

    <v-card outlined class="mx-5 pa-5 overflow-auto" max-height="50vh">
      <v-row class="d-flex justify-space-around todo-container">
        <v-subheader>
          <b></b>
        </v-subheader>
        <v-subheader class="mr-10">
          <b>Nom</b>
        </v-subheader>
        <v-subheader class="pl-10">
          <b>Téléphone</b>
        </v-subheader>
        <v-subheader class="pl-10">
          <b>Catégorie</b>
        </v-subheader>
        <v-subheader class="pl-10">
          <b>Motif</b>
        </v-subheader>
        <v-subheader>
          <b></b>
        </v-subheader>
        <v-subheader>
          <b></b>
        </v-subheader>
        <v-subheader>
          <b></b>
        </v-subheader>
      </v-row>

      <v-row v-for="(items, i) in items" :key="i" class="todo-container">
        <div class="color-box-one" v-if="i % 2 == 0"></div>
        <div class="color-box-two" v-if="i % 2 != 0"></div>
        <v-row class="white-row" v-if="i % 2 == 0">
          <div class="name-cell" @click="linkToClient(items)">
            <v-subheader>{{ items.Name }}</v-subheader>
          </div>
          <v-subheader class="name-class" @click="linkToClient(items)">{{ items.Phone }}</v-subheader>
          <v-subheader class="name-class" @click="linkToClient(items)">{{ items.Category }}</v-subheader>
          <v-subheader class="name-class-motif" @click="linkToClient(items)">{{ items.Motif }}</v-subheader>
          <v-btn icon class="py-3">
            <v-icon>{{ firstIcon }}</v-icon>
          </v-btn>
          <v-btn icon class="py-3">
            <v-icon @click="deleteItem(items)">{{ secondIcon }}</v-icon>
          </v-btn>
        </v-row>

        <v-row class="color-row" v-if="i % 2 != 0">
          <div class="name-cell" @click="linkToClient(items)">
            <v-subheader>{{ items.Name }}</v-subheader>
          </div>
          <v-subheader class="name-class" @click="linkToClient(items)">{{ items.Phone }}</v-subheader>
          <v-subheader class="name-class" @click="linkToClient(items)">{{ items.Category }}</v-subheader>
          <v-subheader class="name-class-motif" @click="linkToClient(items)">{{ items.Motif }}</v-subheader>

          <v-btn icon class="py-3">
            <v-icon>{{ firstIcon }}</v-icon>
          </v-btn>
          <v-btn icon class="py-3">
            <v-icon @click="deleteItem(items)">{{ secondIcon }}</v-icon>
          </v-btn>
        </v-row>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Todo",
  data() {
    return {
      items: [],
      firstIcon: "mdi-calendar-clock",
      secondIcon: "mdi-trash-can-outline"
    };
  },
  beforeCreate() {
    axios.get("http://localhost:8085/todo/5", {
        headers: {
          "content-Type": "application/json",
          "Page-Origin": "home",
          Accept: "/"
        }
      })
      .then(response => {
        this.items = response.data.data[0];
      });
  },
  methods: {
    linkToClient(item) {
      /* eslint-disable no-console */
      console.log("Ligne :", item.Id);
      window.location.href = "/clients/detail/" + item.Id;
    },

    deleteItem(item) {
      /* eslint-disable no-console */
      console.log("Ligne :", item);
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].Id === item.Id) {
          /* eslint-disable no-console */
          console.log("yessss");
          this.items.splice(i, 1);
        }
      }
    }
  }
};
</script>

<style>
/* .todo {
    border-bottom: solid black;
    border-width: 0.01em
} */
.color-box-one {
  width: 3%;
  margin: 5px;
  margin-right: 0px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #36d1dc;
}

.color-box-two {
  width: 3%;
  margin: 5px;
  margin-right: 0px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #5b86e5;

}
.white-row {
  justify-content: space-around;
  margin: 5px;
  min-width: 90%;
  margin-left: 0px;
}
.name-class {
  cursor: pointer;
  /* overflow: hidden; */
  text-align: left;
   width: 20%;
}
.name-cell {
  cursor: pointer;
  text-align: left;
  width: 20%;
}
.name-class-motif {
  text-align: left;
  max-width: 25%;
  min-width: 25%;
  cursor: pointer;
}
.color-row {
  justify-content: space-around;
  margin: 5px;
  margin-left: 0px;
  background-color: aliceblue;
}
.v-application .title {
  text-align: left;
 color: #0af !important;
 font-size: 1em !important;
}
.todo-container {
  min-width: 530px;
}
  .row d-flex justify-space-around todo-container {
    height: 50px;
  }
</style>