<template>

  <div class="">
  <v-subheader class="title">Alertes client</v-subheader>
    <v-card outlined class="pa-5 overflow-auto detail" height="50vh">
      <v-row class="d-flex justify-space-around " v-for="(item, io) in items" :key="io">
        <v-row class="white-row" v-if="io % 2 == 0">
          <v-icon class="ml-5">mdi-bell-outline</v-icon>
          <div class="alert-text-wrapper" @click="linkToClient(item)">
            <v-subheader>{{item.motif}}</v-subheader>
          </div>
          <v-btn icon>
            <v-icon @click="deleteItem(item)">mdi-trash-can-outline</v-icon>
          </v-btn>
        </v-row>

        <v-row class="color-row" v-if="io % 2 != 0">
          <v-icon class="ml-5">mdi-bell-outline</v-icon>
          <div class="alert-text-wrapper" @click="linkToClient(item)">
            <v-subheader>{{item.motif}}</v-subheader>
          </div>
          <v-btn icon>
            <v-icon @click="deleteItem(item)">mdi-trash-can-outline</v-icon>
          </v-btn>
        </v-row>
      </v-row>
    </v-card>
  </div>

</template>


<script>
import axios from "axios";
export default {
  name: "Alerts",

  components: {},

  data: () => ({
    alert: "",
    delete: "",
    items: []
  }),

  beforeMount() {
    axios
      .get("http://localhost:8085/alerts/5", {
        headers: {
          "content-Type": "application/json",
          Accept: "/"
        }
      })
      .then(response => {
        this.items = response.data.data[0];
      });
  },

  methods: {
    deleteItem(item) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].alert_id === item.alert_id) {
          this.items.splice(i, 1);
        }
      }
    },
    linkToClient(item) {
      window.location.href = "/clients/detail/" + item.client_id;
    }
  }
};
</script>
<style scoped>
.alert-text-wrapper {
  margin-right: 10%;
  text-align: left;
  width: 50%;
  overflow: hidden;
}

.color-row {
  justify-content: space-around;
  margin: 5px;
  margin-left: 0px;
  background-color: aliceblue;
  border-radius: 10px;
  cursor: pointer;
}

.white-row {
  justify-content: space-around;
  margin: 5px;
  margin-left: 0px;
  border-radius: 10px;
  cursor: pointer;
}

.detail {
  height: 30vh;
}

.overview {
  height: 50vh;
}
.title {
 color: #0af;
 font-size: 1em !important;

}
</style>
