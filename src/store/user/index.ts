import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IUser } from "../../models/user";
import { TThunkAction } from '../types';
import { getUser } from '../../api/index';


export interface IUserState {
    user: IUser;
    loading: boolean;
}

const defaultState: IUserState = {
    user: null,
    loading: false,
}

export interface IUserLoadingAction {
    type: 'USER_LOADIND_START',
}

export interface IUserLoadSuccessAction {
    type: 'USER_LOADING_FINISH',
    payload: IUser | null,
}

export type IUserStateAction = IUserLoadingAction | IUserLoadSuccessAction;

function UserLoadingStartAction (): IUserLoadingAction {
    return {
      type: 'USER_LOADIND_START',
    };
};

function UserLoadingFinishAction (payload: IUser | null): IUserLoadSuccessAction {
    return {
      type: 'USER_LOADING_FINISH',
      payload,
    };
};

export function LoadUser (id: number): TThunkAction<Promise<void>> {
    return (dispatch: Dispatch) => {
        dispatch(UserLoadingStartAction());
        
        return getUser(id)
            .then((data: IUser | null) => {
                dispatch(UserLoadingFinishAction(data));
            })
            .catch(error => {
                dispatch(UserLoadingFinishAction(null));
            })
    }
}

export function userReducer(state:IUserState = defaultState, action: IUserStateAction): IUserState {
    switch (action.type) {
        case 'USER_LOADIND_START':
            return {
                ...state,
                loading: true,
            };
        case 'USER_LOADING_FINISH': {
            return {
                user: action.payload,
                loading: false, 
            }
        }

        default: 
            return state;
    }
}



