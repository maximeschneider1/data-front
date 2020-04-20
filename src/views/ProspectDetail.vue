<template>
  <v-content>
    <v-container class="container">
      <v-row>
        <v-col cols="3">
          <InfoLeadName></InfoLeadName>
        </v-col>
        <v-col cols="5">
          <InfoLead></InfoLead>
        </v-col>
        <v-col cols="3">
          <Alerts></Alerts>
        </v-col>
      </v-row>

      <v-row>


        <v-col cols="4">
          <KPILead></KPILead>
        </v-col>

        <v-col cols="5">
          <v-card class="pa-5 ma-5">
            <v-row>
              <div class="d-flex">
                <div>
                  <v-card-subtitle>Info name</v-card-subtitle>
                  <p>Jean mi</p>
                </div>
                <div>
                  <v-card-subtitle>Info name</v-card-subtitle>
                  <p>Jean mi</p>
                </div>
                <div>
                  <v-card-subtitle>Info name</v-card-subtitle>
                  <p>Jean mi</p>
                </div>
              </div>
            </v-row>
            <v-row>
              <div class="d-flex">
                <div>
                  <v-card-subtitle>Info name</v-card-subtitle>
                  <p>Jean mi</p>
                </div>
                <div>
                  <v-card-subtitle>Info name</v-card-subtitle>
                  <p>Jean mi</p>
                </div>
                <div>
                  <v-card-subtitle>Info name</v-card-subtitle>
                  <p>Jean mi</p>
                </div>
              </div>
            </v-row>
          </v-card>
        
        </v-col>
        <v-col cols="4">
          <NoteLead></NoteLead>
        </v-col>
        <v-col cols="3"><Tag></Tag></v-col>
      </v-row>
      <!-- class="justify-center" -->
      <v-container class="py-0">
        <v-row align="center" justify="start">
          <v-col
            v-for="(selection, i) in selections"
            :key="selection.text"
            class="shrink"
            @click="maFunc(selection.text)"
          >
            <v-chip close @click:close="selected.splice(i, 1)">
              <v-icon left v-text="selection.icon"></v-icon>
              {{ selection.text }}
            </v-chip>
          </v-col>
        </v-row>
      </v-container>

      <v-card max-width="250">
        <v-divider v-if="!allSelected"></v-divider>

        <v-list>
          <template v-for="(item, i) in categories">
            <v-list-item
              v-if="!selected.includes(i)"
              :key="i"
              @click="selected.push(i); maFunc(item.text)"
            >
              <v-list-item-avatar>
                <v-icon :disabled="loading" v-text="item.icon"></v-icon>
              </v-list-item-avatar>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </v-card>

      <!-- <Chat></Chat> -->
    </v-container>
  </v-content>
</template>
<script>
// import Chat from "../components/Chat";
import Alerts from "../components/Home/Alerts";
import InfoLead from "../components/Leads/InformationsLead";
import InfoLeadName from "../components/Leads/InformationsLeadName";
import KPILead from "../components/Leads/KpiLead";
import NoteLead from "../components/Leads/NoteLead";
import Tag from "../components/Tag";
export default {
  components: {
    Alerts,
    InfoLead,
    InfoLeadName,
    KPILead,
    NoteLead, 
    Tag
    // Chat
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
    maFunc(i) {
      // eslint-disable-next-line no-console
      console.log("maxime", i);
    },
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