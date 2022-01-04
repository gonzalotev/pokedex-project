import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import * as actions from 'store/pokedex/actions';
import * as types from 'store/pokedex/types';
import PokedexService from 'services/pokedex';
import { getPokemonsSuccess } from 'store/pokedex/actions';

export function* getPokemons() {
  try {
    const pokemons = yield call(PokedexService.getPokemons);
    yield put(getPokemonsSuccess(pokemons));
  } catch (error) {
    yield put(actions.getPokemonsError(error.response?.message));
  }
}

export function* pokemonSaga() {
  yield all([
    takeLatest(types.GET_POKEMONS_REQUEST, getPokemons),
  ]);
}

export default pokemonSaga;
