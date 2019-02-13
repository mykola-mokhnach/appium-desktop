import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import StartServerPage from './containers/StartServerPage';
import ServerMonitorPage from './containers/ServerMonitorPage';
import SessionPage from './containers/SessionPage';
import InspectorPage from './containers/InspectorPage';
import ConfigPage from './containers/ConfigPage';
import { ipcRenderer } from 'electron';
import i18n from '../configs/i18next.config.client';
import { I18nextProvider } from 'react-i18next';

const initialI18nStore = ipcRenderer.sendSync('get-initial-translations');

ipcRenderer.on('appium-language-changed', (event, message) => {
  const {
    language,
    namespace,
    resource
  } = message;
  if (!i18n.hasResourceBundle(language, namespace)) {
    i18n.addResourceBundle(language, namespace, resource);
  }
  i18n.changeLanguage(language);
});

export default () => (
  <I18nextProvider i18n={ i18n } initialI18nStore={ initialI18nStore } initialLanguage="de">
    <App>
      <Switch>
        <Route exact path="/" component={StartServerPage} />
        <Route path="/monitor" component={ServerMonitorPage} />
        <Route path="/session" component={SessionPage} />
        <Route path="/inspector" component={InspectorPage} />
        <Route path="/config" component={ConfigPage} />
      </Switch>
    </App>
  </I18nextProvider>
);
