import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.noir = "#232121";
app.config.globalProperties.blanc = "#F4F3EF";

createApp(App).mount('#app')
