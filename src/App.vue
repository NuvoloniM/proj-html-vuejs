<template>
  <div id="app">
    <HeaderComp/>
    <main>
      <HeroComp/>
      <StartedSection/>
    </main>
  </div>
</template>

<script>
import 'bootstrap';
import HeaderComp from './components/header/HeaderComp.vue';
import HeroComp from './components/main/HeroComp.vue';
import StartedSection from './components/main/StartedSection.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    HeroComp,
    StartedSection,
  }
}
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
