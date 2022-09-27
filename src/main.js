import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import 'bootstrap/dist/css/bootstrap.min.css' 

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

// import "./assets/main.css";
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.mount("#app");