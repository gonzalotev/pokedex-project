import initialState from 'store/pokemon/initialState';
import * as types from 'store/pokemon/types';

export default function pokemon(state = initialState, action) {
  switch (action.type) {
    case types.GET_POKEMONS_REQUEST:
      return { ...state, isLoading: true, pokemon: initialState.pokemons };
    case types.GET_POKEMONS_SUCCESS:
      return { ...state, pokemon: action.pokemons, isLoading: false };
    case types.GET_POKEMONS_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
