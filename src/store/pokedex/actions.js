import * as types from 'store/pokedex/types';

export const getPokemonsRequest = (params) => ({ type: types.GET_POKEMONS_REQUEST, params });
export const getPokemonsSuccess = (pokemons) => ({ type: types.GET_POKEMONS_SUCCESS, pokemons });
export const getPokemonsError = (error) => ({ type: types.GET_POKEMONS_ERROR, error });

export const getPokemonRequest = () => ({ type: types.GET_POKEMON_REQUEST });
export const getPokemonSuccess = (pokemon) => ({ type: types.GET_POKEMON_SUCCESS, pokemon });
export const getPokemonError = (error) => ({ type: types.GET_POKEMON_ERROR, error });
