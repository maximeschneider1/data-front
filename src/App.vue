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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
