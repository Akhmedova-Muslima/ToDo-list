import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./translations/en.json"
import ru from "./translations/ru.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: 'ru',
    fallbacklng: 'en'
  })