import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faIcons, faCalendar, faMapMarkerAlt, faEnvelope, faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

library.add(faIcons, faCalendar, faMapMarkerAlt, faEnvelope, faGithub, faGithubAlt, faArrowUpLong)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('faIcon', FontAwesomeIcon, {})
})
