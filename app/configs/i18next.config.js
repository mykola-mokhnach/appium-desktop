import i18next from 'i18next';
import i18nextBackend from 'i18next-node-fs-backend';
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


let i18n;
if (!i18n) {
  i18n = i18next.createInstance(i18nextOptions);
  i18n
    .use(i18nextBackend)
    .init(() => {});
}

export default i18n;
