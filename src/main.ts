import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe,faBlog,faBirthdayCake,faImage } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {Vue} from "vue-class-component";

library.add(faGlobe,faBlog,faBirthdayCake,faImage,faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare)

createApp(App).use(store).use(router).mount('#app')
