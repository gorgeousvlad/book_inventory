import {  createStore as _createStore, combineReducers, applyMiddleware } from 'redux';
import { IUserList } from '../models/userList';
import { IUser } from '../models/user';
import { IUserState } from './user_list';
import thunkMiddleware from 'redux-thunk';
import { IState } from './types';

export function configureStore(initialState: IState) {
    return _createStore(
      combineReducers(),
      initialState,
      applyMiddleware(thunkMiddleware),
  
    )
  }