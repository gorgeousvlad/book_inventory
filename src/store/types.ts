import { Reducer, Store, createStore as _createStore, ReducersMapObject } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosRequestConfig } from 'axios';

import { IBookListState, IBookListStateAction } from "./book_list";
import { IBookState, IBookStateAction } from './book/index';
import { VacanciesState } from '../units/Vacancies/models';


export interface IState {
  books: IBookListState;
  book: IBookState;
  vacancies: VacanciesState;
}

export interface BaseAction {
  type: string;
  payload?: any;
}

export interface StateFetchData<T = any> {
  loading: boolean;
  data?: T;
  error?: string;
}

export type ReqData = Partial<Pick<AxiosRequestConfig,'data' | 'params'>>

export type TReduxActions = IBookListStateAction | IBookStateAction;
export type TReduxStore = Store<IState, TReduxActions>;
export type TReduxReducer = Reducer<TReduxStore, TReduxActions>;
export type TReducersMapObject = ReducersMapObject<TReduxStore, TReduxActions>
export type TThunkAction<T = void> = ThunkAction<T, IState, void, TReduxActions>;
export type TThunkDispatch = ThunkDispatch<IState, void, TReduxActions>



