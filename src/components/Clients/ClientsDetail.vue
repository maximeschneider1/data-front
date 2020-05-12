<template>
  <v-content>
    <v-container class="container">
      <Header></Header>

      <div class="d-flex">
        <v-col cols="3" height="100px" class="mr-4">
          <InfoClient></InfoClient>
          <Tag class="mt-5"></Tag>
        </v-col>
        <v-col>
          <v-row>
            <ScoringOverview class="ooo"></ScoringOverview>
          </v-row>
          <v-row class="mt-5 aaa">
            <div class="d-flex actions">
            <div cols="6" class="sub-childs colorz"><KPIClients></KPIClients></div>
            <div cols="6" class="aaa">
              <Alerts class="aaa"></Alerts>
              <NoteClients class="mt-5"></NoteClients>
            </div>
            </div>
          </v-row>
        </v-col>
      </div>
    </v-container>
  </v-content>
</template>

<script>
import Alerts from "./ClientsAlerts";
import Header from "../AppStructure/Header";
import ScoringOverview from "./Production";
import InfoClient from "./InformationsClients";

import KPIClients from "./KpiClient";
import NoteClients from "./NoteClients";
import Tag from "./Tag";
export default {
  components: {
    Alerts,
    ScoringOverview,
    InfoClient,
    KPIClients,
    NoteClients,
    Tag,
    Header
  },
  data: () => ({
    items: [
      {
        text: "Nature",
        icon: "mdi-nature"
      },
      {
        text: "Nightlife",
        icon: "mdi-glass-wine"
      },
      {
        text: "November",
        icon: "mdi-calendar-range"
      },
      {
        text: "Portland",
        icon: "mdi-map-marker"
      },
      {
        text: "Biking",
        icon: "mdi-bike"
      }
    ],
    loading: false,
    client_id: "",
    search: "",
    selected: []
  }),

  computed: {
    allSelected() {
      return this.selected.length === this.items.length;
    },
    categories() {
      const search = this.search.toLowerCase();

      if (!search) return this.items;

      return this.items.filter(item => {
        const text = item.text.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];

      for (const selection of this.selected) {
        selections.push(this.items[selection]);
      }

      return selections;
    }
  },

  watch: {
    selected() {
      this.search = "";
    }
  },

  methods: {
    next() {
      this.loading = true;

      setTimeout(() => {
        this.search = "";
        this.selected = [];
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style scoped>
.aaa {
  width: 100%;
}

.actions {

  width: 100%;
}

.sub-childs {
  width: 100%;
  height: 100%;
}

.ooo {
width: 100%;
}
</style>