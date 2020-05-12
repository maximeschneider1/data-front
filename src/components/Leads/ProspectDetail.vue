<template>
  <v-content>
    <v-container class="container">
      <Header></Header>
      <v-stepper value="3" class="mx-3" alt-labels>
        <v-stepper-header class="stepper-container">
          <v-stepper-step step="1" complete >
            <p class="stepper">1er mail</p>
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="2" complete>
            <p class="stepper">1er mail</p>
          </v-stepper-step>

          <v-divider></v-divider>
          <v-stepper-step step="3" complete>
            <p class="stepper">1er mail</p>
          </v-stepper-step>

          <v-divider></v-divider>
          <v-stepper-step step="4">
            <p class="stepper">1er mail</p>
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="5">
            <p class="stepper">1er mail</p>
          </v-stepper-step>
        </v-stepper-header>
      </v-stepper>

      <div class="d-flex">
        <v-col cols="3" >
          <InfoLeadName></InfoLeadName>
        </v-col>

        <v-col cols="9">
          <!-- KPI -->
          <KPILead></KPILead>
          <div class="d-flex justify-space-between mb-5">
            <ContactHistory></ContactHistory>
            <NoteLead></NoteLead>
          </div>

          <LeadTag></LeadTag>
          <!-- Tag -->


        </v-col>

      </div>
    </v-container>
  </v-content>
</template>
<script>
// import Chat from "../components/Chat";
// import Alerts from "../components/Home/Alerts";
import Header from "../AppStructure/Header";
import InfoLeadName from "./InformationsLeadName";
import KPILead from "./KpiLead";
import NoteLead from "./NoteLead";
import LeadTag from "./LeadTag";
import ContactHistory from "./ContactHistory";
export default {
  components: {
    // Alerts,
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
  margin: 0px;

}
.v-stepper{
    box-shadow: none;
    border: thin solid rgba(0, 0, 0, 0.12);
    /*padding: 1%;*/
}
.v-stepper__header {
  box-shadow: none !important;
}

</style>