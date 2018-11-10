import * as React from "react";
import { Link } from 'react-router-dom';
const userData = require('../../data/users.json');

export interface IUser{
  name: string;
}
export interface IUserData {
  [key:string]: IUser
}
export interface IUserListProps {
  users: IUserData
}

export class UserList extends React.Component<IUserListProps, {}> {
  render(){
    const {users} = userData;
    return (
      Object.keys(users).map((id: string, index) => {
        const user = users[id];
        return (
          <div>
            <Link to={`/profile/${id}`}>{user.name}</Link>
          </div>
        )
      })
    )
  }
}