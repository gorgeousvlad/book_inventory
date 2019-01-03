import { connect } from 'react-redux';
import { UserList } from './index';
import { IState } from '../../store/types';
import { LoadUserList } from '../../store/user_list/index';
import { Dispatch } from 'redux';


export const UserListContainer = connect(
  (state: IState) => {
    return {
      ...state.userList,
    }
  },
  (dispatch: Dispatch) => {
    return {
      LoadUserList: () => dispatch(LoadUserList()),
    }
  }
)(UserList);