/* import initialState from 'store/example/initialState';
import * as types from 'store/example/types';

export default function example(state = initialState, action) {
  switch (action.type) {
    case types.GET_FILTERS_REQUEST:
      return { ...state, isLoading: true, filters: initialState.filters };
    case types.GET_FILTERS_SUCCESS:
      return { ...state, filters: action.filters, isLoading: false };
    case types.GET_FILTERS_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
*/
