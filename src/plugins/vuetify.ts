import LogoWollokWhite from '@/components/LogoWollokWhite.vue'
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ac4142' // Wollok reddish color
      }
    }
  },
  icons: {
    values: {
      wollok: {
        component: LogoWollokWhite
      }
    }
  }
})
