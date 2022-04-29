import Vue from 'vue'
import App from './App.vue'

// importo e creo libreria personale font awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import {faCirclePlay} from "@fortawesome/free-regular-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faCircleUser, faMagnifyingGlass, faChevronDown, faArrowRightLong, faCirclePlay, )

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
