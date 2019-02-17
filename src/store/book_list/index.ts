import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TThunkAction } from '../types';
import { getBooks, TBookRecord } from '../../api/index';


export interface IBookListState {
    books: TBookRecord[] | null;
    loading: boolean;
}

const defaultState: IBookListState = {
    books: null,
    loading: false,
}

export interface IBookListLoadingStartAction {
    type: 'BOOK_LIST_LOADIND_START',
}

export interface IBookListLoadingFinishsAction {
    type: 'BOOK_LIST_LOADING_FINISH',
    payload: TBookRecord[] | null,
}

export type IBookListStateAction = IBookListLoadingStartAction | IBookListLoadingFinishsAction;

function BookListLoadingStartAction (): IBookListLoadingStartAction {
    return {
      type: 'BOOK_LIST_LOADIND_START',
    };
};

function BookListLoadingFinishAction (payload: TBookRecord[] | null): IBookListLoadingFinishsAction {
    return {
      type: 'BOOK_LIST_LOADING_FINISH',
      payload,
    };
};

export function LoadBooks (): TThunkAction {
    return (dispatch: Dispatch) => {
        dispatch(BookListLoadingStartAction());
        
        return getBooks()
            .then((data: TBookRecord[] | null) => {
                dispatch(BookListLoadingFinishAction(data));
            })
            .catch(error => {
                dispatch(BookListLoadingFinishAction(null));
            })
    }
}

export function bookListReducer(state:IBookListState = defaultState, action: IBookListStateAction): IBookListState {
    switch (action.type) {
        case 'BOOK_LIST_LOADIND_START':
            return {
                ...state,
                loading: true,
            };
        case 'BOOK_LIST_LOADING_FINISH': {
            return {
                books: action.payload,
                loading: false, 
            }
        }
        default:
            return state;
    }
}



