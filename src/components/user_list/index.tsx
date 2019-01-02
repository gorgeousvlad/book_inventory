import * as React from "react";
import { Link } from 'react-router-dom';
import { getUserList } from '../../api/';
import { IUserList, IUserPreview } from '../../models/userList';

export interface IUserListState {
  users: IUserList | null;
  loading: boolean;
}

export class UserList extends React.Component<{}, IUserListState> {
  
  public state = {
    users: null,
    loading: false,
  }

  public componentDidMount() {
    this.setState({loading: true})
    getUserList().then((users: IUserList) => {
      this.setState({ users, loading: false});
    });
  }

  public render(){
    const {users, loading} = this.state;
    return (
      loading
      ? <div>Loading...</div>
      : users !== null && 
        Object.keys(users).map((id: string, index) => {
          const user: IUserPreview = (users as IUserList)[id];
          return (
            <div>
              <Link to={`/profile/${id}`}>{user.name}</Link>
            </div>
          )
        })
    );
  }
}