import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import config from './app.config';

const i18nextOptions = {
  debug: true,
  interpolation: {
    escapeValue: false
  },
  saveMissing: true,
  lng: 'en',
  fallbackLng: config.fallbackLng,
  whitelist: config.languages,
  react: {
    wait: false
  }
};


let i18n;
if (!i18n) {
  i18n = i18next.createInstance(i18nextOptions);
  i18n
    .use(initReactI18next)
    .init(() => {});
}

export default i18n;
