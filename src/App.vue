<template>
  <div id="app">
    <HeaderNav/>
    <main>
      <HeroComp/>
      <StartedSection/>
      <ExploreSection/>
      <HelpSection/>
      <PubblicitySection/>
      <EventSection/>
      <CommentSection/>
      <SubscribeSection/>
    </main>
    <footer>
      <FooterSection/>
    </footer>
  </div>
</template>

<script>
import 'bootstrap';

// * Header components *
import HeaderNav from './components/header/HeaderNav.vue';
// * Main components *
import HeroComp from './components/main/HeroComp.vue';
import StartedSection from './components/main/StartedSection.vue';
import ExploreSection from './components/main/ExploreSection.vue'
import HelpSection from './components/main/HelpSection.vue'
import PubblicitySection from './components/main/PubblicitySection.vue';
import EventSection from './components/main/EventSection.vue';
import CommentSection from './components/main/CommentSection.vue';
import SubscribeSection from './components/main/SubscribeSection.vue';
// * Footer components *
import FooterSection from './components/footer/FooterSection.vue';


export default {
  name: 'App',
  components: {
    HeaderNav,
    HeroComp,
    StartedSection,
    ExploreSection,
    HelpSection,
    PubblicitySection,
    EventSection,
    CommentSection,
    SubscribeSection,
    FooterSection,
  }
}
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

footer {
  background-color: #000;
}
</style>
