import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import { tvlist } from "./store/tvlist";
import router from "./router";

const store = createStore({
  modules: {
    tvlist,
  },
});

createApp(App).use(router).use(store).mount("#app");
