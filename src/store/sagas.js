import { all } from 'redux-saga/effects';
import { pokemonSaga } from 'store/pokedex/sagas';

export default function* rootSaga() {
  yield all([
    pokemonSaga(),
  ]);
}
