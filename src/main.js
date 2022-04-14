import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
if ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && window.localStorage.getItem("t") != "light") || window.localStorage.getItem("t") == "dark") {
  document.querySelector("html").classList.add("dark");
}
createApp(App).use(router).mount('#app');