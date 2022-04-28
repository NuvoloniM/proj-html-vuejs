<template>
  <div id="app">
    <HeaderComp/>
  </div>
</template>

<script>
import 'bootstrap';
import HeaderComp from './components/header/HeaderComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
  }
}
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
