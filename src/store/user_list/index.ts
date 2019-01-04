import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IUserList } from "../../models/userList";
import { TThunkAction } from '../types';
import { getUserList } from '../../api/index';


export interface IUserListState {
    userList: IUserList | null;
    loading: boolean;
}

const defaultState: IUserListState = {
    userList: null,
    loading: false,
}

export interface IUserListLoadingStartAction {
    type: 'USER_LIST_LOADIND_START',
}

export interface IUserListLoadingFinishsAction {
    type: 'USER_LIST_LOADING_FINISH',
    payload: IUserList | null,
}

export type IUserListStateAction = IUserListLoadingStartAction | IUserListLoadingFinishsAction;

function UserListLoadingStartAction (): IUserListLoadingStartAction {
    return {
      type: 'USER_LIST_LOADIND_START',
    };
};

function UserListLoadingFinishAction (payload: IUserList | null): IUserListLoadingFinishsAction {
    return {
      type: 'USER_LIST_LOADING_FINISH',
      payload,
    };
};

export function LoadUserList (): TThunkAction {
    return (dispatch: Dispatch) => {
        dispatch(UserListLoadingStartAction());
        
        return getUserList()
            .then((data: IUserList | null) => {
                dispatch(UserListLoadingFinishAction(data));
            })
            .catch(error => {
                dispatch(UserListLoadingFinishAction(null));
            })
    }
}

export function userListReducer(state:IUserListState = defaultState, action: IUserListStateAction): IUserListState {
    switch (action.type) {
        case 'USER_LIST_LOADIND_START':
            return {
                ...state,
                loading: true,
            };
        case 'USER_LIST_LOADING_FINISH': {
            return {
                userList: action.payload,
                loading: false, 
            }
        }
        default:
            return state;
    }
}



