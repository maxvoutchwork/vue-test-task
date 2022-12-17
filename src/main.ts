import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import 'bootstrap';


import 'bootstrap/scss/bootstrap.scss';

import './index.scss'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

axios.defaults.baseURL = 'http://localhost:8000/api/';
    axios.defaults.withCredentials = true;


createApp(App).use(vuetify).use(store).use(router).mount('#app')
