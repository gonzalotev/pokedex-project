/* import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';
import * as actions from 'store/example/actions';
import * as types from 'store/example/types';
import AppService from 'services/example';

export function* getFilters({ params }) {
  try {
    const { data } = yield call(AppService.getFiltersRequest, params);
    yield put(actions.getFiltersSuccess(data.filters));
  } catch (error) {
    yield put(actions.getFiltersError(error.response?.data?.message));
  }
}

export function* exampleSaga() {
  yield all([
    takeLatest(types.GET_FILTERS_REQUEST, getFilters),
  ]);
}
*/
