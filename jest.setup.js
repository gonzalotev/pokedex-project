import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { Formik } from 'formik';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from 'src/constant';

// Globalize common imports to make them available in all test files

global.React = React;
global.configureStore = configureStore;
global.ENDPOINT = 'endpoint';

let mountedComponent;

global.render = (Component, props = {}, options = {}) => {
  if (!mountedComponent) {
    let component = <Component {...props} />;

    if (options.router) {
      component = <MemoryRouter {...options.router}>{component}</MemoryRouter>;
    }

    if (options.store) {
      component = <Provider store={options.store}>{component}</Provider>;
    }

    if (options.formik) {
      component = <Formik onSubmit={() => ({})} initialValues={options.formik}>{component}</Formik>;
    }

    if (options.chakra) {
      component = <ChakraProvider theme={theme}>{component}</ChakraProvider>;
    }

    mountedComponent = render(component);
  }

  return mountedComponent;
};

global.tearDown = () => {
  if (mountedComponent) {
    mountedComponent.unmount();
  }
  mountedComponent = undefined;
};
