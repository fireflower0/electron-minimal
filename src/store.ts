import { combineReducers, createStore } from 'redux';
import { State } from './states/state';
import user from './reducers/user';

const combineReducer = combineReducers<State>({
  user,
});

export const store = createStore(combineReducer);

export default store;
