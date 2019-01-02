import { IUserState, IUserStateAction } from "./user_list";
import { IUser } from "../models/user";
import { Reducer, Store, createStore as _createStore, combineReducers, applyMiddleware, ReducersMapObject } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';

export interface IState {
  userList: IUserState;
  userProfile: IUser;
}

export type TReduxActions = IUserStateAction;
export type TReduxStore = Store<IState, TReduxActions>;
export type TReduxReducer = Reducer<TReduxStore, TReduxActions>;
export type TReducersMapObject = ReducersMapObject<TReduxStore, TReduxActions>
export type TThunkAction<T = void> = ThunkAction<T, IState, void, TReduxActions>;



