<template>
  <div class="about">
    <v-content>
      <v-container>
        <Header></Header>

        <v-col cols="12">
          <v-card class="pa-5 " :elevation="7">
            <v-row>
              <v-card-title>Documentation</v-card-title>
            </v-row>

            <v-row>
              <v-tabs>
             
                <v-tab>Panneaux Solaire</v-tab>
                <v-tab>Coaching</v-tab>
                <v-tab>Marketing</v-tab>
                <v-spacer></v-spacer>
                <v-text-field class="ma-1" label="Recherche" prepend-icon="mdi-magnify" solo dense></v-text-field>
                

                <v-tab-item>
                  <div class="d-flex flex-wrap">
                    <v-card v-for="(panneaux, i) in panneaux" :key="i" class="ma-5 pa-5">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="150px"
                        width="250"
                      ></v-img>
                      <v-card-title v-text="panneaux.text"></v-card-title>
                    </v-card>
                  </div>
                </v-tab-item>

                <v-tab-item>
                  <div class="d-flex flex-wrap">
                    <v-card v-for="(coaching, i) in coaching" :key="i" class="ma-5 pa-5">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="150px"
                        width="250"
                      ></v-img>
                      <v-card-title v-text="coaching.text"></v-card-title>
                    </v-card>
                  </div>
                </v-tab-item>

                <v-tab-item>
                  <div class="d-flex flex-wrap">
                    <v-card
                      v-for="(marketing, i) in marketing"
                      :key="i"
                      class="ma-5 pa-5"
                      max-width="280"
                    >
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="150px"
                        width="250"
                      ></v-img>
                      <v-card-title v-text="marketing.text"></v-card-title>
                    </v-card>
                  </div>
                </v-tab-item>
              </v-tabs>
            </v-row>
          </v-card>
        </v-col>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "DocumentsView",
  components: {
    Header
  },

  data() {
    return {
      panneaux: [
        {
          id: 1,
          text: "Panneaux solaire",
          icon: "mdi-nature"
        },
        {
          id: 2,
          text: "Augmentez la production",
          icon: "mdi-glass-wine"
        },
        {
          id: 3,
          text: "Nettoyer ses panneaux",
          icon: "mdi-glass-wine"
        },
        {
          id: 4,
          text: "Soleil : ce qu'il faut savoir",
          icon: "mdi-glass-wine"
        }
      ],
      marketing: [
        {
          id: 1,
          text: "Market",
          icon: "mdi-nature"
        },
        {
          id: 2,
          text: "Vendez plus",
          icon: "mdi-glass-wine"
        },
        {
          id: 3,
          text: "Le pétrole ? C'est has been !",
          icon: "mdi-glass-wine"
        },
        {
          id: 4,
          text: "ARGENT",
          icon: "mdi-glass-wine"
        }
      ],
      coaching: [
        {
          id: 1,
          text: "Nature",
          icon: "mdi-nature"
        },
        {
          id: 2,
          text: "Coach",
          icon: "mdi-glass-wine"
        },
        {
          id: 3,
          text: "Coach",
          icon: "mdi-glass-wine"
        },
        {
          id: 4,
          text: "Coach",
          icon: "mdi-glass-wine"
        }
      ]
    };
  },
};
</script>
