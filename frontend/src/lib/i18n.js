import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en-US",
    fallbackLng: "en-US",
    backend: {
      loadPath: "/locale/{{lng}}.json", // path file JSON per bahasa
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
