import * as selectors from 'store/example/selectors';

describe('getRoles', () => {
  it('should return `roles` array', () => {
    const state = { example: { filters: { roles: [{ value: 1, label: 'rol' }] } } };
    expect(selectors.getRoles(state)).toEqual([{ value: 1, label: 'rol' }]);
  });
});

describe('getStates', () => {
  it('should return `states` array', () => {
    const state = { example: { filters: { states: [{ value: 1, label: 'state' }] } } };
    expect(selectors.getStates(state)).toEqual([{ value: 1, label: 'state' }]);
  });
});

describe('getFilters', () => {
  it('should return object `filters` with arrays', () => {
    const state = { example: { filters: { states: [{ value: 1, label: 'state' }] } } };
    expect(selectors.getStates(state)).toEqual({filters: [{ value: 1, label: 'state' }]});
  });
});
