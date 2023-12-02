import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslation from "./languages/English.json";
import dariTranslation from "./languages/Dari.json";
import pashtoTranslation from "./languages/Pashto.json";
const resources = {
  english: {
    translation: englishTranslation,
  },
  dari: {
    translation: dariTranslation,
  },
  pashto: {
    translation: pashtoTranslation,
  },
};
let lang = localStorage.getItem("app-lang");
lang = lang ? lang.toString().replace('"', "").replace('"', "") : "english";
i18next.use(initReactI18next).init({
  resources,
  lng: lang,
});
export default i18next;
