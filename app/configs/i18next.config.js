import i18n from 'i18next';
import i18nextBackend from 'i18next-node-fs-backend';
import { initReactI18next } from 'react-i18next';
import config from './app.config';
import path from 'path';

const i18nextOptions = {
  backend: {
    loadPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
    addPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
    jsonIndent: 2,
  },
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

i18n
  .use(i18nextBackend)
  .use(initReactI18next)
  .init(i18nextOptions);

export default i18n;
