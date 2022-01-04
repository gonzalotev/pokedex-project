import * as types from 'store/example/types';

describe('GET_FILTERS_REQUEST', () => {
  it('returns the correct action', () => {
    expect(types.GET_FILTERS_REQUEST).toBe(
      'Example/GET_FILTERS_REQUEST',
    );
  });
});

describe('GET_FILTERS_SUCCESS', () => {
  it('returns the correct action', () => {
    expect(types.GET_FILTERS_SUCCESS).toBe(
      'Example/GET_FILTERS_SUCCESS',
    );
  });
});

describe('GET_FILTERS_ERROR', () => {
  it('returns the correct action', () => {
    expect(types.GET_FILTERS_ERROR).toBe(
      'Example/GET_FILTERS_ERROR',
    );
  });
});
