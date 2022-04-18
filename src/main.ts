import { createApp } from "vue"
import App from "./App.vue"
import { createI18n } from "vue-i18n"
import './index.css'

const i18n = createI18n({
	// something vue-i18n options here ...
})

const app = createApp(App)

app.use(i18n)
app.mount("#app")
