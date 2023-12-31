import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import router from "./router";
import "@/index.css";

// vueuse head for metas
import { createHead } from "@vueuse/head";
// Languages
import en from "@/locales/en.json";
import ka from "@/locales/ka.json";
// Components
import App from "@/App.vue";
import VueSelect from "vue-select";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import NavList from "@/components/nav/NavList.vue";
import IconBase from "@/components/icons/IconBase.vue";
import LangSelect from "@/components/select/langSelect.vue";
import PageLayout from "@/components/layout/pageLayout.vue";
import ContactInformation from "@/components/contact/ContactInformation.vue";
import FilterBtns from "@/components/btn/filterBtns.vue";
import ContactModal from "@/components/contact/ContactModal.vue";
import Logo from "@/components/logo/Logo.vue";
import Header from "@/components/header/Header.vue"

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    ka,
  },
});

const app = createApp(App);

const head = createHead();
app
  .component("v-select", VueSelect)
  .component("Sidebar", Sidebar)
  .component("Header", Header)
  .component("NavList", NavList)
  .component("IconBase", IconBase)
  .component("LangSelect", LangSelect)
  .component("PageLayout", PageLayout)
  .component("FilterBtns", FilterBtns)
  .component("ContactInformation", ContactInformation)
  .component("ContactModal", ContactModal)
  .component("Logo", Logo)

  .use(router)
  .use(i18n)
  .use(head)
  .mount("#app");
