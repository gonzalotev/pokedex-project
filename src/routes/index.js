import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import store, { history } from 'store';
import { theme } from 'constant';

import AppRoutes from './AppRoutes';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <ChakraProvider theme={theme}>
        <AppRoutes />
      </ChakraProvider>
    </Router>
  </Provider>
);

export default App;
