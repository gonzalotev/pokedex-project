import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import * as actions from 'store/pokemon/actions';
import * as types from 'store/pokemon/types';
import PokedexService from 'services/pokedex';

export function* getPokemons({ pokemon }) {
  try {
    const { data } = yield call(PokedexService.getPokemonsRequest, pokemon);
    yield put(actions.getPokemonsSuccess(data.pokemons));
  } catch (error) {
    yield put(actions.getPokemonsError(error.response?.data?.message));
  }
}

export function* pokemonSaga() {
  yield all([
    takeLatest(types.GET_POKEMONS_REQUEST, getPokemons),
  ]);
}

export default pokemonSaga;
