import { all } from 'redux-saga/effects';
import { pokemonSaga } from 'store/pokedex/sagas';
import { appSaga } from './app/sagas';

export default function* rootSaga() {
  yield all([
    pokemonSaga(),
    appSaga(),
  ]);
}
