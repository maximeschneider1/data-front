<template>
    <nav>
        <v-navigation-drawer
                v-model="drawer"
                app
                :elevation=10 
                 class="nav-drawer"
                  :width="225"
                  src="../assets/toolbarimg.png"
                dark
                permanent>
            <v-list  >
                
                <!-- <v-subheader >ENGIE MY SOLAR COACH</v-subheader> -->
                <v-img height="100" src="../assets/engie-logo.png"></v-img>
                <v-list>
                <v-list-item dark v-for="(item, io) in items" :key="io" :to="item.url" class="d-flex">
                    
                    <v-list-item-icon dark >
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content dark class="text">
                        <v-list-item-title dark>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                </v-list>

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
                    { text: 'Home', icon: 'mdi-home', url: '/'},
                    { text: 'Clients', icon: 'mdi-account-group' , url: '/clients'},
                    { text: 'Prospect', icon: 'mdi-account-search' , url: '/prospects'},
                    { text: 'Documentation', icon: 'mdi-file-multiple' , url: '/documentation'},
                    { text: 'Réglages', icon: 'mdi-cog' , url: '/settings'},
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
 /* .tile {
    margin: 5px;
    border-radius: 20px;
  }
  .tile:hover {
    background: blue;
  }
  .tile:active {
    background: white;
    
  }
  
  .text:active {
      background: blue;
      color: white;
  } */
.nav-drawer {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

    .text {
        text-align: left;
        font-weight: bold;
    }

/* .v-input .v-input__slot {
    border-radius: 10px;
    border: 1px solid black; 
} */
</style>
