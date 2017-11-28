import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/createStore';
import App from './app/app';
import 'client/assets/favicon.ico';

const renderRoot = (Root) => {
  render(
    <Provider store={store}>
      <Root/>
    </Provider>,
    document.getElementById('root')
  );
};

renderRoot(App);

if (module.hot) {
  module.hot.accept('./app/app', () => {
    renderRoot(require('./app/app').default);
  });
}
