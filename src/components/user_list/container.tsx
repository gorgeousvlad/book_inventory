import { connect } from 'react-redux';
import { UserList } from './index';
import { IState, TThunkDispatch } from '../../store/types';
import { LoadUserList } from '../../store/user_list/index';
import { Dispatch } from 'redux';


export const UserListContainer = connect(
  (state: IState) => {
    return {
      ...state.userList,
    }
  },
  (dispatch: TThunkDispatch) => {
    return {
      LoadUserList: () => dispatch(LoadUserList()),
    }
  }
)(UserList);