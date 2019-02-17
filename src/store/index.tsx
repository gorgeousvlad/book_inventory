import {  createStore as _createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { IState } from './types';
import { bookListReducer } from './book_list/index';
import { bookReducer } from './book/index';

export function configureStore(initialState?: IState) {
    return _createStore(
      combineReducers({
        books: bookListReducer,
        book: bookReducer,
      }),
      initialState,
      applyMiddleware(thunkMiddleware),
  
    )
  }