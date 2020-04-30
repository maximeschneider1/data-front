<template>
  <v-content>
    <v-container class="container">
      <Header></Header>

      <div class="d-flex">
        <v-col cols="3">
          <InfoClient></InfoClient>
          <Tag></Tag>
        </v-col>
        <v-col >
          <v-row>
            <ScoringOverview class="ooo"></ScoringOverview>
          </v-row>
          <v-row class="mt-5">
            <div class="d-flex actions">
            <div cols="6" class="sub-childs"><KPIClients></KPIClients></div>
            <div cols="6" class="aaa">
              <Alerts isDetail="detail" class="aaa"></Alerts>
              <NoteClients></NoteClients>
            </div>
            </div>
          </v-row>
        </v-col>
      </div>

      <v-row>
        <div cols="5">
          <InfoClientName></InfoClientName>
          <InfoClient></InfoClient>
        </div>
      </v-row>

      <v-row>
        <v-col cols="7">
          <v-row>
            <ScoringOverview></ScoringOverview>
          </v-row>
        </v-col>

        <v-col cols="3">
          <KPIClients></KPIClients>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="5">
          <v-card class="pa-5">
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
          <Tag></Tag>
        </v-col>

        <v-col cols="3">
          <NoteClients></NoteClients>
        </v-col>
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
import Header from "../components/Header";
import ScoringOverview from "../components/Home/ScoringOverview";
import InfoClient from "../components/Clients/InformationsClients";
import InfoClientName from "../components/Clients/InformationsClientsName";
import KPIClients from "../components/Clients/KpiClient";
import NoteClients from "../components/Clients/NoteClients";
import Tag from "../components/Tag";
export default {
  components: {
    Alerts,
    ScoringOverview,
    InfoClient,
    InfoClientName,
    KPIClients,
    NoteClients,
    Tag,
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
.aaa {
  height: 100%;
  background-color: aqua;
  width: 100%;
}

.actions {

  width: 100%;
}

.sub-childs {
  width: 100%;
}

.ooo {
width: 100%;
}
</style>