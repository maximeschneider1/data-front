<template>
<div>
    <v-subheader>Aujourd'hui</v-subheader>
    <v-card class="elemStyle pa-5 mx-5" height="30vh">
            <v-card class="d-flex pa-5 ma-5" >
                <v-icon>{{ icon }}</v-icon>
                <v-subheader>16h30 - 16h50</v-subheader>
                <v-subheader>Christian</v-subheader>
                <v-subheader>06 28 65 69 79</v-subheader>
                <v-subheader>Point conso</v-subheader>
            </v-card>
            <v-card class="d-flex pa-5 ma-5">
                <v-icon>{{icon }}</v-icon>
                                <v-subheader>16h30 - 16h50</v-subheader>
                <v-subheader>Christian</v-subheader>
                <v-subheader>06 28 65 69 79</v-subheader>
                <v-subheader>Point conso</v-subheader>
            </v-card>
            <v-card class="d-flex pa-5 ma-5">
                <v-icon>{{icon }}</v-icon>
                                <v-subheader>16h30 - 16h50</v-subheader>
                <v-subheader>Christian</v-subheader>
                <v-subheader>06 28 65 69 79</v-subheader>
                <v-subheader>Point conso</v-subheader>
            </v-card>
            <v-card class="d-flex pa-5 ma-5">
                <v-icon>{{icon }}</v-icon>
                                <v-subheader>16h30 - 16h50</v-subheader>
                <v-subheader>Christian</v-subheader>
                <v-subheader>06 28 65 69 79</v-subheader>
                <v-subheader>Point conso</v-subheader>
            </v-card>
    </v-card>
</div>
</template>


<script>
    export default {
        name: 'Planning',

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
    .elemStyle {
        overflow:auto
    }

</style>
