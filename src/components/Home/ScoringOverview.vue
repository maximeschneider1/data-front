<template>
    <div>
        <v-subheader>Tendance client</v-subheader>
        <v-card class="pa-5 ma-5">
<!--            <v-card-text class="max">Scoring overview</v-card-text>-->
            <v-img
                    :src="require('/Users/max/data-front/src/assets/maquettecrm.png')"
                    class="my-3"
                    contain
            />
        </v-card>
    </div>
</template>


<script>

    export default {
        name: 'ScoringOverview',

        components: {
        },

        data: () => ({
            }

        ),

        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .yes {
        /*height: available;*/
    }

</style>
