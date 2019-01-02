import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IUser } from "../../models/user";
import { TThunkAction } from '../types';


export interface IUserState {
    user: IUser;
    loading: boolean;
}

const defaultState: IUserState = {
    user: null,
    loading: false,
}

export interface IUserLoadingAction {
    type: 'USER_LOADIND',
}

export interface IUserLoadSuccessAction {
    type: 'USER_LOAD_SUCCES',
    payload: IUser,
}

export type IUserStateAction = IUserLoadingAction | IUserLoadSuccessAction;

function UserLoadingAction (): IUserLoadingAction {
    return {
      type: 'USER_LOADIND',
    };
};

function UserLoadSuccessAction (payload: IUser): IUserLoadSuccessAction {
    return {
      type: 'USER_LOAD_SUCCES',
      payload,
    };
};

function LoadUser (id: string): TThunkAction<Promise<IUserLoadSuccessAction>> {
    return (dispatch: Dispatch) => {}
}



