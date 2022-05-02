import Vue from 'vue'
import App from './App.vue'

// importo e creo libreria personale font awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faCircleUser, faFileLines, faUser, faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faChevronDown, faArrowRightLong, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faCircleUser, faFileLines, faUser, faMagnifyingGlass, faChevronDown, faArrowRightLong, faCirclePlay, faLocationDot,faFacebook, faTwitter, faInstagram, faLinkedin )

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
