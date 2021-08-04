import { createApp } from 'vue'
import App from './App'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/fluent-light/theme.css';
import 'primevue/resources/primevue.min.css';

const app = createApp(App)
app.use(PrimeVue)

app.mount('#app')
