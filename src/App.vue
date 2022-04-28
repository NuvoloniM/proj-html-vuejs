<template>
  <div id="app">
    <HeaderComp/>
    <main>
      <HeroComp/>
    </main>
  </div>
</template>

<script>
import 'bootstrap';
import HeaderComp from './components/header/HeaderComp.vue';
import HeroComp from './components/main/HeroComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    HeroComp,
  }
}
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
