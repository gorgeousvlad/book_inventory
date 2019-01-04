import { connect } from 'react-redux';
import { User } from './index';
import { IState, TThunkDispatch } from '../../store/types';
import { LoadUser } from '../../store/user';


export const UserContainer = connect(
  (state: IState) => {
    return {
      ...state.user,
    }
  },
  (dispatch: TThunkDispatch) => {
    return {
      LoadUser: (id: number) => dispatch(LoadUser(id)),
    }
  }
)(User);