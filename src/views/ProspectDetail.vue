<template>
  <v-content>
    <v-container class="container">
      <Header></Header>

      <v-stepper value="3" class=" ma-5" alt-labels>
        <v-stepper-header class=" stepper-container pa-0">
          <v-stepper-step step="1" complete>
            <p class="stepper">Select campaign settings</p>
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2" complete>
            <p class="stepper">Select campaign settings</p>
          </v-stepper-step>

          <v-divider></v-divider>
          <v-stepper-step step="3" complete>
            <p class="stepper">Select campaign settings</p>
          </v-stepper-step>

          <v-divider></v-divider>
          <v-stepper-step step="4">
            <p class="stepper">Select campaign settings</p>
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="5">
            <p class="stepper">Select campaign settings</p>
          </v-stepper-step>
        </v-stepper-header>
      </v-stepper>

      <div class="d-flex">
        <div>
          <v-col class="d-flex">
            <v-col cols="4">
              <InfoLeadName></InfoLeadName>
            </v-col>
            <v-col cols="8">
              <InfoLead></InfoLead>
            </v-col>
            <!-- <v-col >
            <Alerts isDetail="detail"></Alerts>
            </v-col>-->
          </v-col>
          <v-col class="d-flex">
            <v-col cols="4">
              <NoteLead></NoteLead>
            </v-col>
            <v-col cols="5">
              <ContactHistory></ContactHistory>
            </v-col>
            <v-col cols="3">
              <LeadTag></LeadTag>
            </v-col>
          </v-col>
        </div>
        <v-col cols="2">
          <KPILead></KPILead>
        </v-col>
      </div>

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

      <!-- <v-card max-width="250">
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
      </v-card>-->
    </v-container>
  </v-content>
</template>
<script>
// import Chat from "../components/Chat";
// import Alerts from "../components/Home/Alerts";
import Header from "../components/Header";
import InfoLead from "../components/Leads/InformationsLead";
import InfoLeadName from "../components/Leads/InformationsLeadName";
import KPILead from "../components/Leads/KpiLead";
import NoteLead from "../components/Leads/NoteLead";
import LeadTag from "../components/Leads/LeadTag";
import ContactHistory from "../components/Leads/ContactHistory";
export default {
  components: {
    // Alerts,
    InfoLead,
    InfoLeadName,
    KPILead,
    NoteLead,
    LeadTag,
    ContactHistory,
    Header
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

<style scoped>
.stepper {
  text-align: center;
  font-size: 0.8em;
}
.stepper-container {
  /* overflow: auto; */
  height: 13vh;
}
</style>