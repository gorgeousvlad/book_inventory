import * as React from "react";
import { RouteComponentProps } from "react-router";
import { TBookRecord } from '../../api/index';

interface MatchParams {
  id: string;
}

interface IBookProps extends RouteComponentProps<MatchParams> {
  loading: boolean;
  book: TBookRecord | null;
  LoadBook(id: string): void;
}

export class Book extends React.PureComponent<IBookProps, {}> {

  public componentDidMount() {
    const { id } = this.props.match.params;

    this.props.LoadBook(id);
  }

  public render(){
    const { loading, book } = this.props;
    return (
      <div>
        {loading
        ? <div>Loading...</div>
        : book !== null &&
        <>
          <div>
            <span>Name: </span>
            <span>{(book as TBookRecord).name}</span>
          </div>
          <div>
            <span>Author: </span>
            <span>{(book as TBookRecord).author}</span>
          </div>
        </>
          
        }
      </div>
    )
  }
}