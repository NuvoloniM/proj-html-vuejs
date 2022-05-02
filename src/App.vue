<template>
  <div id="app">
    <HeaderNav/>
    <main>
      <HeroComp/>
      <div class="return_home text-end px-2">
      <a href="#">
        <font-awesome-icon icon="fa-solid fa-circle-up" />
      </a>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');
@import './assets/style/variables.scss';


#app {
  font-family: 'Roboto', sans-serif;

  .return_home {
    position: fixed;
    bottom: 10px;
    right: 0px;
    z-index: 4;

    a {
      text-decoration: none;
      color: $main-text;
      font-size: 3em;
    }
  }
}

footer {
  background-color: #000;
}
</style>
