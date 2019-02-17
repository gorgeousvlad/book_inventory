import { Reducer, Store, createStore as _createStore, ReducersMapObject } from 'redux';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IBookListState, IBookListStateAction } from "./book_list";
import { IBookState, IBookStateAction } from './book/index';


export interface IState {
  books: IBookListState;
  book: IBookState;
}

export type TReduxActions = IBookListStateAction | IBookStateAction;
export type TReduxStore = Store<IState, TReduxActions>;
export type TReduxReducer = Reducer<TReduxStore, TReduxActions>;
export type TReducersMapObject = ReducersMapObject<TReduxStore, TReduxActions>
export type TThunkAction<T = void> = ThunkAction<T, IState, void, TReduxActions>;
export type TThunkDispatch = ThunkDispatch<IState, void, TReduxActions>



