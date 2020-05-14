<template>
<div>
    <v-row>

        <v-subheader>Lundi 30 mars 2020</v-subheader>
        <v-spacer></v-spacer>
       <v-subheader>Antoine Duhamel</v-subheader>
        <v-avatar>
      <img
        src="../../assets/conseiller-engie.png"
        alt="John"
      >
    </v-avatar>
    
    </v-row>
    <v-divider class="mt-2 mb-5"></v-divider>
    </div>
</template>


<script>


    export default {
        name: 'Header',

        components: {
        },

        data: () => ({
                item: 1,
                addIcon: 'playlist_add',
                items: [
                    { text: 'Home', icon: 'mdi-clock', url: '/'},
                    { text: 'Clients', icon: 'mdi-clock' , url: '/clients'},
                    { text: 'Planning', icon: 'mdi-clock' , url: '/planning'},
                    { text: 'Documentation', icon: 'mdi-clock' , url: '/documentation'},
                    { text: 'Réglages', icon: 'mdi-clock' , url: '/settings'},
                ],
                // drawer: true
            }

        ),

        methods: {
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .menu-items {
        text-align: left;
    }

</style>
