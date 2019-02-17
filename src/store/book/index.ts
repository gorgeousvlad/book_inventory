import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TThunkAction } from '../types';
import { getBookById, TBookRecord } from '../../api/index';


export interface IBookState {
    book: TBookRecord;
    loading: boolean;
}

const defaultState: IBookState = {
    book: null,
    loading: false,
}

export interface IBookLoadingAction {
    type: 'BOOK_LOADIND_START',
}

export interface IBookLoadSuccessAction {
    type: 'BOOK_LOADING_FINISH',
    payload: TBookRecord | null,
}

export type IBookStateAction = IBookLoadingAction | IBookLoadSuccessAction;

function BookLoadingStartAction (): IBookLoadingAction {
    return {
      type: 'BOOK_LOADIND_START',
    };
};

function BookLoadingFinishAction (payload: TBookRecord | null): IBookLoadSuccessAction {
    return {
      type: 'BOOK_LOADING_FINISH',
      payload,
    };
};

export function LoadBook (id: string): TThunkAction<Promise<void>> {
    return (dispatch: Dispatch) => {
        dispatch(BookLoadingStartAction());
        
        return getBookById(id)
            .then((data: TBookRecord | null) => {
                dispatch(BookLoadingFinishAction(data));
            })
            .catch(error => {
                dispatch(BookLoadingFinishAction(null));
            })
    }
}

export function bookReducer(state:IBookState = defaultState, action: IBookStateAction): IBookState {
    switch (action.type) {
        case 'BOOK_LOADIND_START':
            return {
                ...state,
                loading: true,
            };
        case 'BOOK_LOADING_FINISH': {
            return {
                book: action.payload,
                loading: false, 
            }
        }

        default: 
            return state;
    }
}



