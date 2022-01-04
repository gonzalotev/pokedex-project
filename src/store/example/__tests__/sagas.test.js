import { call, put } from 'redux-saga/effects';

import * as sagas from 'store/example/sagas';
import * as actions from 'store/example/actions';
import exampleService from 'services/example';

describe('getFilters', () => {
  it('handles successful attempts', () => {
    const params = { roles: true, states: true };
    const response = {
      data: {
        filters: {
          roles: [{ value: 1, label: 'rol' }],
          states: [{ value: 1, label: 'state' }],
        },
        success: true,
      },
    };

    const action = actions.getFiltersRequest(params);
    const saga = sagas.getFilters(action);
    expect(saga.next()).toEqual({
      done: false,
      value: call(exampleService.getFiltersRequest, params),
    });
    expect(saga.next(response)).toEqual({
      done: false,
      value: put(actions.getFiltersSuccess(response.data.filters)),
    });
    expect(saga.next()).toEqual({
      done: true,
      value: undefined,
    });
  });

  it('with error instance', () => {
    const params = { roles: true, states: true };

    const action = actions.getFiltersRequest(params);
    const saga = sagas.getFilters(action);
    expect(saga.next()).toEqual({
      done: false,
      value: call(exampleService.getFiltersRequest, params),
    });
    const error = new Error('error');
    expect(saga.next()).toEqual({
      done: true,
      value: undefined,
    });
  });
});
