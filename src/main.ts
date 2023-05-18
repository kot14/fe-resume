import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { createPinia } from "pinia";
import vAutoFocus from "./components/directives/autofocus";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.directive("auto-focus", vAutoFocus);
app.mount("#app");
