import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/createStore';
import { AppContainer } from 'react-hot-loader';
import App from './app/app';

const renderRoot = (Root) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <App/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

renderRoot(App);

if (module.hot) {
  module.hot.accept('./app/app', () => {
    renderRoot(require('./app/app').default);
  });
}
