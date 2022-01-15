import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import * as actions from 'store/app/actions';
import * as types from 'store/app/types';
import appService from 'services/app';
import { getStatsSuccess } from 'store/app/actions';
import { getPokemons } from '../pokedex/sagas';

export function* getStats({ params }) {
  try {
    const characteristics = yield call(appService.getStats, params);
    yield put(getStatsSuccess(characteristics.stats));
  } catch (error) {
    yield put(actions.getStatsError(error.response?.message || 'No se pueden visualizar los stats'));
  }
}

export function* appSaga() {
  yield all([
    takeLatest(types.GET_STATS_REQUEST, getStats),
  ]);
}

export default appSaga;
