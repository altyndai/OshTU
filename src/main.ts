import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Primevue from "primevue/config"
import "primevue/resources/themes/aura-light-blue/theme.css"
import "primeflex/primeflex.css"
import "primeicons/primeicons.css"
import router from "./router/index"
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import RadioButton from 'primevue/radiobutton'
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";

const app = createApp(App);
app.use(router);
app.use(Primevue);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('RadioButton', RadioButton);
app.component('RadioButton', RadioButton);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.mount('#app');
