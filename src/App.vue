<template>
  <div id="app">
    <router-view name="headerNav"></router-view>
    <router-view name="mainContent" class="mainContent"> </router-view>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store);
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;
  font-size: 0.19rem;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.mainContent {
  margin-top: 0.9rem;
}
</style>
