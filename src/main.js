import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import StudentPresenceItem  from '@/components/StudentPresenceItem.vue'
import PresenceOptions from '@/components/PresenceOptions.vue'
import Backbutton from '@/components/Backbutton.vue'
import StudentsView from '@/views/StudentsView.vue'

const app = createApp(App)

app.component('food-item', StudentPresenceItem)
app.component('back-button', Backbutton)
app.component('presence-type', PresenceOptions)

app.use(router)

app.mount('#app')
