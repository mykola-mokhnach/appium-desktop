import i18n from 'i18next';
import i18nextBackend from 'i18next-node-fs-backend';
import config from './app.config';
import path from 'path';

const i18nextOptions = {
  backend: {
    loadPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
    addPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.missing.json'),
    jsonIndent: 2,
  },
  debug: true,
  interpolation: {
    escapeValue: false
  },
  saveMissing: true,
  fallbackLng: config.fallbackLng,
  whitelist: config.languages,
  react: {
    wait: false
  }
};

export async function initI18n () {
  if (!i18n.isInitialized) {
    i18n.use(i18nextBackend);
    await i18n.init(i18nextOptions);
  }
}

export default i18n;
