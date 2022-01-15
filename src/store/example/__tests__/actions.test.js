import * as actions from 'store/app/actions';
import * as types from 'store/app/types';

describe('getFiltersRequest', () => {
  const params = { roles: true };
  it('should create an action', () => {
    expect(actions.getFiltersRequest(params)).toEqual({
      type: types.GET_FILTERS_REQUEST,
      params,
    });
  });
});

describe('getFiltersSuccess', () => {
  it('should create an action to specify the request has succeeded', () => {
    const filters = { roles: true };
    expect(actions.getFiltersSuccess(filters)).toEqual({
      type: types.GET_FILTERS_SUCCESS,
      filters,
    });
  });
});

describe('getFiltersError', () => {
  it('creates an action to specify the request has failed', () => {
    const error = new Error('oops');
    expect(actions.getFiltersError(error)).toEqual({
      type: types.GET_FILTERS_ERROR,
      error,
    });
  });
});
