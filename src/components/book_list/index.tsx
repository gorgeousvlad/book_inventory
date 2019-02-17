import * as React from "react";
import { Link } from 'react-router-dom';
import { IBook } from '../../../server/db/models';
import { TBookRecord } from '../../api/index';

export interface IBookListProps {
  books: TBookRecord[];
  loading: boolean;
  LoadBooks(): void;
}

export class BooksList extends React.PureComponent<IBookListProps, {}> {
  
  public componentDidMount() {
   this.props.LoadBooks();
  }

  public render(){
    const {books, loading} = this.props;
    return (
      loading
      ? <div>Loading...</div>
      : books !== null && 
        books.map((book: TBookRecord, index) => {
          return (
            <div>
              <Link to={`/book/${book._id}`}>{book.name}</Link>
            </div>
          )
        })
    );
  }
}