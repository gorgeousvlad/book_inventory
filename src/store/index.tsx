import {  createStore as _createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { IState} from './types';
import { bookListReducer } from './book_list/index';
import { bookReducer } from './book/index';
import {vacancies} from '../units/Vacancies/store/vacancies';

export function configureStore(initialState?: IState) {
    return _createStore(
      combineReducers({
        books: bookListReducer,
        book: bookReducer,
        vacancies,
      }),
      initialState,
      applyMiddleware(thunkMiddleware),
  
    )
  }
