import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter,faFacebook ,faPinterest} from '@fortawesome/free-brands-svg-icons'
import { faSearch, fas } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// instagram
import { fab} from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
    faTwitter,
    faSearch,
    faUser,
    faShoppingBag,
    faFacebook,
    faPinterest,
    fab
)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
