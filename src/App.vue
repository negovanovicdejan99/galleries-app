<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
       <a class="navbar-brand">Galleries</a>
       <div class="navbar-nav mr-auto d-flex flex-row">
        <router-link class="nav-link" to="/">All Galleries</router-link> |
        <router-link class="nav-link" to="/create">Create New Gallery</router-link>
      </div>
      <router-link class="navbar-brand" v-if="!isAuthorized" to="/login">Login</router-link>
      <router-link class="navbar-brand" v-else to="/login" @click.native="logout">Logout</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'isAuthorized'
    ])
  },
  methods: {
    ...mapActions([
      'logoutUser',
    ]),
    async logout() {
      await this.logoutUser();
    },
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
