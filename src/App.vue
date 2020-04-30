<template>
  <v-app>
    <navigation></navigation>
    <router-view></router-view>

<!--    <Home></Home>-->
  </v-app>
<!--  <div id="app">-->
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/settings">settings</router-link> |-->
<!--      <router-link to="/clients">clients</router-link> |-->
<!--      <router-link to="/client-detail">client-detail</router-link> |-->
<!--      <router-link to="/planning">planning</router-link> |-->
<!--      <router-link to="/documentation">documentation</router-link> |-->
<!--    </div>-->
<!--    <router-view/>-->

<!--  </div>-->
</template>

<script>
  import Navigation from "./components/Navigation";
// import Home from "./views/Home";
  export default {
    name: 'App',

    components: {
      Navigation,
      // Home
    },
  }
</script>


<style>

@import url(https://fonts.googleapis.com/css?family=Open+Sans);
@import url(http://fonts.googleapis.com/css?family=Lato);

#app {
    font-family: 'Lato', serif;
    /* font-size: 10px; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
  background-color: #F8F8F8; 
}

#nav {
  /* padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  } */
}
</style>
