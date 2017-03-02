import { combineReducers } from 'redux';
import api from './api';
import collections from './collections';
import granules from './granules';
import stats from './stats';
import pdrs from './pdrs';
import logs from './logs';

export const reducers = {
  def: (state = {}, action) => state,
  api,
  collections,
  granules,
  stats,
  pdrs,
  logs
};

export default combineReducers(Object.assign({}, reducers));