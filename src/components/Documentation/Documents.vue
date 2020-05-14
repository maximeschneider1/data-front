<template>
  <div class="about">
    <v-content>
      <v-container>
        <Header></Header>

        <v-col cols="12">
          <v-card class="pa-10 " outlined >
            <v-row>
              <v-card-title>Documentation</v-card-title>
            </v-row>

            <v-row >
              <v-tabs>
             
                <v-tab>Panneaux Solaire</v-tab>
                <v-tab>Coaching</v-tab>
                <v-tab>Marketing</v-tab>
                <v-spacer></v-spacer>
                <v-text-field class="ma-1 mb-5" label="Recherche"  outlined prepend-icon="mdi-magnify" dense></v-text-field>
                

                <v-tab-item>
                  <div class="d-flex flex-wrap">
                    <v-card href="documentation/article" outlined v-for="(panneaux, i) in panneaux" :key="i" class="ma-5 pa-5 article">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="150px"
                        width="250"
                      ></v-img>
                      <v-card-title v-text="panneaux.text" class="article"></v-card-title>
                    </v-card>
                  </div>
                </v-tab-item>

                <v-tab-item>
                  <div class="d-flex flex-wrap">
                    <v-card href="documentation/article" outlined v-for="(coaching, i) in coaching" :key="i" class="ma-5 pa-5 article">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="150px"
                        width="250"
                      ></v-img>
                      <v-card-title v-text="coaching.text" class="article"></v-card-title>
                    </v-card>
                  </div>
                </v-tab-item>

                <v-tab-item>
                  <div class="d-flex flex-wrap">
                    <v-card
                            href="documentation/article"
                      v-for="(marketing, i) in marketing"
                      :key="i"
                      class="ma-5 pa-5 article"
                      max-width="280"
                      outlined 
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
import Header from "../AppStructure/Header";

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
          text: "Panneaux IBC Solar : Qu'est ce qui change cette année ?",
          icon: "mdi-nature"
        },
        {
          id: 2,
          text: "Avril 2020 : Passez à la rentabilité supérieure",
          icon: "mdi-glass-wine"
        },
        {
          id: 3,
          text: "Nettoyer ses panneaux : pas si compliqué",
          icon: "mdi-glass-wine"
        },
        {
          id: 4,
          text: "Solaire : ce qu'il faut savoir",
          icon: "mdi-glass-wine"
        }
      ],
      marketing: [
        {
          id: 1,
          text: "Recommandez l'offre Lioo",
          icon: "mdi-nature"
        },
        {
          id: 2,
          text: "Les tendances clients de 2020",
          icon: "mdi-glass-wine"
        },
        {
          id: 3,
          text: "Apprennez à vos clients le solar hacking",
          icon: "mdi-glass-wine"
        },
        {
          id: 4,
          text: "Des nouvelles de la chaine Youtube",
          icon: "mdi-glass-wine"
        }
      ],
      coaching: [
        {
          id: 1,
          text: "Apprennez à vos clients le solar hacking",
          icon: "mdi-nature"
        },
        {
          id: 2,
          text: "Les basiques de l'autoconsommation",
          icon: "mdi-glass-wine"
        },
        {
          id: 3,
          text: "Un nouveau type d'ampoule EC2",
          icon: "mdi-glass-wine"
        },
        {
          id: 4,
          text: "IBC Solar transmets ses recommandations 2020",
          icon: "mdi-glass-wine"
        }
      ]
    };
  },
};
</script>

<style scoped>

  .article {
    max-width: 300px;
    text-align: left;
    word-break: normal;
  }
</style>