import { connect } from 'react-redux';
import { User } from './index';
import { IState } from '../../store/types';
import { Dispatch } from 'redux';
import { LoadUser } from '../../store/user';


export const UserContainer = connect(
  (state: IState) => {
    return {
      ...state.user,
    }
  },
  (dispatch: Dispatch) => {
    return {
      LoadUser: (id: number) => dispatch(LoadUser(id)),
    }
  }
)(User);