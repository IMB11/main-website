import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      theme: false
    };
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
