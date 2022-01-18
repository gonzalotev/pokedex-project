import initialState from 'store/app/initialState';
import * as types from 'store/app/types';

export default function app(state = initialState, action) {
  switch (action.type) {
    case types.GET_STATS_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_STATS_SUCCESS:
      return { ...state, stats: action.stats, isLoading: false };
    case types.GET_STATS_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
