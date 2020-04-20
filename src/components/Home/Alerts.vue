<template>
    <div>
        <v-subheader>Alertes client</v-subheader>
        <v-card class="px-5 overflow-auto" height="30vh">
            <v-list>
                <v-list-item v-for="(item, io) in items" :key="io">
<!--                    <v-card>-->
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                        

                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>


<script>

    export default {
        name: 'Alerts',

        components: {
        },

        data: () => ({
                items: [
                    { text: 'Vous avez 3 nouveaux clients en score 6', icon: 'mdi-clock'},
                    { text: 'Vous avez 3 nouveaux clients en score 6', icon: 'mdi-clock'},
                    { text: 'Vous avez 3 nouveaux clients en score 6', icon: 'mdi-clock'},
                    { text: 'Vous avez 3 nouveaux clients en score 6', icon: 'mdi-clock'},
                    { text: 'Vous avez 3 nouveaux clients en score 6', icon: 'mdi-clock'},
                ],
            }

        ),

        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*.structurer {*/
    /*    width: 40%;*/
    /*}*/

</style>
