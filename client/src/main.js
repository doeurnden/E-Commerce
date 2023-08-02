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
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
// instagram
import { fab} from '@fortawesome/free-brands-svg-icons';

//next
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
//back
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

//credit 
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';

//paypal
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';

//copyright
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
//shop
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';

//cartDown
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

//dashboard
import { faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
//setting
import { faGear } from '@fortawesome/free-solid-svg-icons';
//Logout
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
//statistic
import { faSignal } from '@fortawesome/free-solid-svg-icons';
//payment
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
//transaction
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
//product
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
//customer
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
//message
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//list
import { faList } from '@fortawesome/free-solid-svg-icons';
//filter
import { faFilter } from '@fortawesome/free-solid-svg-icons';


/* add icons to the library */
library.add(
    faTwitter,
    faSearch,
    faUser,
    faShoppingBag,
    faFacebook,
    faPinterest,
    fab,
    faChevronRight,
    faChevronLeft,
    faCreditCard,
    faCcPaypal,
    faCopyright,
    faStoreAlt,
    faCaretDown,
    faChevronDown,
    faTableCellsLarge,
    faGear,
    faArrowRight,
    faSignal,
    faDollarSign,
    faMoneyBill,
    faBoxOpen,
    faUserGroup,
    faEnvelope,
    faList,
    faFilter
)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
