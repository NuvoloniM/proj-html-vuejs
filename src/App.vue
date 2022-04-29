<template>
  <div id="app">
    <HeaderComp/>
    <main>
      <HeroComp/>
      <StartedSection/>
      <ExploreSection/>
    </main>
  </div>
</template>

<script>
import 'bootstrap';

// * Header components *
import HeaderComp from './components/header/HeaderComp.vue';
// * Main components *
import HeroComp from './components/main/HeroComp.vue';
import StartedSection from './components/main/StartedSection.vue';
import ExploreSection from './components/main/ExploreSection.vue'
// * Footer components *


export default {
  name: 'App',
  components: {
    HeaderComp,
    HeroComp,
    StartedSection,
    ExploreSection,
  }
}
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
