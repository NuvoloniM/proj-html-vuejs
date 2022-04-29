<template>
  <div id="app">
    <HeaderComp/>
    <main>
      <HeroComp/>
      <StartedSection/>
      <ExploreSection/>
      <HelpSection/>
      <PubblicitySection/>
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
import HelpSection from './components/main/HelpSection.vue'
import PubblicitySection from './components/main/PubblicitySection.vue';
// * Footer components *


export default {
  name: 'App',
  components: {
    HeaderComp,
    HeroComp,
    StartedSection,
    ExploreSection,
    HelpSection,
    PubblicitySection,
  }
}
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
