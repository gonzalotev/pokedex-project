import initialState from 'store/pokedex/initialState';
import * as types from 'store/pokedex/types';

export default function pokemon(state = initialState, action) {
  switch (action.type) {
    case types.GET_POKEMONS_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_POKEMONS_SUCCESS:
      return { ...state, pokemons: action.pokemons, isLoading: false };
    case types.GET_POKEMONS_ERROR:
      return { ...state, isLoading: false, error: action.error };
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
