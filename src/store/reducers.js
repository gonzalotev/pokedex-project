import { combineReducers } from 'redux';
import pokemon from 'store/pokedex/reducer';

const reducers = {
  pokemon,
};

const createRootReducer = (router) => combineReducers({
  router,
  ...reducers,
});

export default createRootReducer;
