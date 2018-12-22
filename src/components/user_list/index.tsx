import * as React from "react";
import { Link } from 'react-router-dom';
import { getUsers } from '../../api/';

export interface IUser{
  name: string;
}
export interface IUserData {
  [key:string]: IUser
}
export interface IUserListState {
  users: IUserData
  loading: boolean;
}

export class UserList extends React.Component<{}, IUserListState> {
  
  public state = {
    loading: false,
    users: {}
  }

  public componentDidMount() {
    this.setState({loading: true})
    getUsers().then((users: IUserData) => {
      this.setState({ users, loading: false});
    });
  }

  public render(){
    const {users} = this.state;
    return (
      Object.keys(users).length
        ? Object.keys(users).map((id: string, index) => {
          const user: IUser = (users as IUserData)[id];
          return (
            <div>
              <Link to={`/profile/${id}`}>{user.name}</Link>
            </div>
          )
        })
        : <span>No users available</span> 
    );
  }
}