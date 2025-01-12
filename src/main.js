import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import StudentPresenceItem  from '@/components/StudentPresenceItem.vue'
import PresenceOptions from '@/components/PresenceOptions.vue'

const app = createApp(App)

app.component('food-item', StudentPresenceItem)
app.component('presence-type', PresenceOptions)

app.use(router)

app.mount('#app')
