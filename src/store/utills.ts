import axios, { AxiosRequestConfig } from 'axios';
import { Dispatch } from 'redux';

import { BaseAction, TThunkAction, StateFetchData, ReqData } from './types';

const initialFetchState: StateFetchData = {
    loading: false,
}

export function createFetchAction(entityName: string, reqConfig: AxiosRequestConfig) {
    return (reqData: ReqData = {}): TThunkAction => {
        return async (dispatch: Dispatch) => {
            dispatch({type: `${entityName}_START`});

            try {
            const {data} = await axios({...reqConfig, ...reqData});

            dispatch({type:`${entityName}_SUCCESS`, payload: data});
            } catch(error) {
            dispatch({type:`${entityName}_ERROR`, payload: error.message})
            }
        }
    }  
  } 

  export function createFetchReducer<TData, TAction extends BaseAction>(entityName: string) {
    return (state: StateFetchData<TData> = initialFetchState, {type, payload}: TAction): StateFetchData<TData> =>  {
        switch(type) {
            case `${entityName}_START`: {
                return {
                    ...state,
                    loading: true,
                    error: undefined,
                }
            }
            case `${entityName}_SUCCESS`: {
                return {
                    ...state,
                    loading: false,
                    data: payload,
                }
            }
            case `${entityName}_ERROR`: {
                return {
                    ...state,
                    loading: false,
                    error: payload,
                }
            }

            default:
                return state;
        }
    }
}