import reducer from 'store/example/reducer';
import * as actions from 'store/example/actions';
import initialState from 'store/example/initialState';

describe('example reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle `GET_FILTERS_REQUEST`', () => {
    const params = { roles: true };
    expect(reducer(undefined, actions.getFiltersRequest(params))).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should handle `GET_FILTERS_SUCCESS`', () => {
    const filters = { roles: [{ value: 1, label: 'rol' }] };
    expect(reducer(undefined, actions.getFiltersSuccess(filters))).toEqual({
      ...initialState,
      filters,
      isLoading: false,
    });
  });

  it('should handle `GET_FILTERS_ERROR`', () => {
    const error = new Error('Oops!');
    expect(reducer(undefined, actions.getFiltersError(error))).toEqual({
      ...initialState,
      isLoading: false,
      error,
    });
  });
});
