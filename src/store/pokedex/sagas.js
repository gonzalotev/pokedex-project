import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import * as actions from 'store/pokedex/actions';
import * as types from 'store/pokedex/types';
import PokedexService from 'services/pokedex';
import { getPokemonsSuccess, getStatsSuccess } from 'store/pokedex/actions';

export function* getPokemons({ params }) {
  try {
    const result = yield call(PokedexService.getPokemons, params);
    yield put(getPokemonsSuccess(result.pokemons, result.total));
  } catch (error) {
    yield put(actions.getPokemonsError(error.response?.message || 'Se ha generado un error'));
  }
}

export function* pokemonSaga() {
  yield all([
    takeLatest(types.GET_POKEMONS_REQUEST, getPokemons),
  ]);
}

export default pokemonSaga;
