import * as React from "react";
import { Link } from 'react-router-dom';
import { IUserList, IUserPreview } from '../../models/userList';

export interface IUserListProps {
  userList: IUserList | null;
  loading: boolean;
  LoadUserList(): void;
}

export class UserList extends React.Component<IUserListProps, {}> {
  
  public componentDidMount() {
   this.props.LoadUserList();
  }

  public render(){
    const {userList, loading} = this.props;
    return (
      loading
      ? <div>Loading...</div>
      : userList !== null && 
        Object.keys(userList).map((id: string, index) => {
          const user: IUserPreview = (userList as IUserList)[id];
          return (
            <div>
              <Link to={`/profile/${id}`}>{user.name}</Link>
            </div>
          )
        })
    );
  }
}