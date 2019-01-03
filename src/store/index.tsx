import {  createStore as _createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './user';
import thunkMiddleware from 'redux-thunk';
import { IState } from './types';
import { userListReducer } from './user_list/index';

export function configureStore(initialState?: IState) {
    return _createStore(
      combineReducers({
        user: userReducer,
        userList: userListReducer,
      }),
      initialState,
      applyMiddleware(thunkMiddleware),
  
    )
  }