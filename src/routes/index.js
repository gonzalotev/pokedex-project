import React from 'react';

import store, { history } from 'store';

import './App.css';

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <App />
      </ChakraProvider>
    </Router>
  </Provider>
);

export default Root;
