import { IUserListState, IUserListStateAction } from "./user_list";
import { Reducer, Store, createStore as _createStore, ReducersMapObject } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { IUserState, IUserStateAction } from "./user";

export interface IState {
  userList: IUserListState;
  user: IUserState;
}

export type TReduxActions = IUserListStateAction | IUserStateAction;
export type TReduxStore = Store<IState, TReduxActions>;
export type TReduxReducer = Reducer<TReduxStore, TReduxActions>;
export type TReducersMapObject = ReducersMapObject<TReduxStore, TReduxActions>
export type TThunkAction<T = void> = ThunkAction<T, IState, void, TReduxActions>;



