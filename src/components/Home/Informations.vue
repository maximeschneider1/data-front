<template>
<div>
    <v-subheader>Informations</v-subheader>
    <div>
        <v-row class="row">
            <v-card class="pa-5 ma-5 ">
                <v-icon>{{ icon }}</v-icon>
                <h3>22</h3>
                <v-subheader>Démarches clients</v-subheader>
            </v-card>
            <v-card class="pa-5 ma-5 ">
                <v-icon>{{icon }}</v-icon>
                <h3>22</h3>
                <v-subheader>Démarches clients</v-subheader>
            </v-card>
        </v-row>
        <v-row>
            <v-card class="pa-5 ma-5 ">
                <v-icon>{{icon }}</v-icon>
                <h3>22</h3>
                <v-subheader>Démarches clients</v-subheader>
            </v-card>
            <v-card class="pa-5 ma-5">
                <v-icon>{{icon }}</v-icon>
                <h3>22</h3>
                <v-subheader>Démarches clients</v-subheader>
            </v-card>
        </v-row>
    </div>
</div>
</template>


<script>

    export default {
        name: 'Informations',

        components: {
        },

        data: () => ({
                ongoing: 'Démarche en cours',
                icon: 'mdi-clock'
            }

        ),

        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .row {
        flex-wrap: nowrap;
        /*width: auto;*/
    }

</style>
