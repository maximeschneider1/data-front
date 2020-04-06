<template>
    <nav>
        <v-navigation-drawer
                v-model="drawer"
                app
                :elevation=1 class="deep-purple accent-4"
                dark
                permanent>
            <v-list>
                <v-subheader dark>ENGIE MY SOLAR COACH</v-subheader>
                <v-list-item v-for="(item, io) in items" :key="io" :to="item.url">
<!--        A FAIRE !!!            v-for="list in lists" v-bind:key="list.id"-->
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content >
                        <v-list-item-title class="menu-items">{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>


<script>


    export default {
        name: 'Navigation',

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
