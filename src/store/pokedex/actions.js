import * as types from 'store/pokemon/types';

export const getPokemonsRequest = (params) => ({ type: types.GET_POKEMONS_REQUEST, params });
export const getPokemonsSuccess = (pokemons, total) => ({ type: types.GET_POKEMONS_SUCCESS, pokemons, total });
export const getPokemonsError = (error) => ({ type: types.GET_POKEMONS_ERROR, error });
