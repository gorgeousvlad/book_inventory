import { Document, Schema, Model, model} from "mongoose";

export interface IBook {
  name: string;
  author: string;
  price: string;
  year?: number;
  publishing?: string; 
  language?: string;
}

export interface IBookModel extends IBook, Document {};

export const BookSchema = new Schema({
  name: String,
  author: String,
  price: String,
  year: Number,
  publishing: String,
  language: String,
});

export type TBookModel = Model<IBookModel>

export const Book: TBookModel = model<IBookModel>('Book',BookSchema);

export function pickBookKeys (data:any): IBook {
  const keys = ['name' ,'author', 'price', 'year', 'publishing', 'language'];

  return Object.keys(data).reduce((res: IBook, key: string) =>{
    if (keys.includes(key)) {
      res[key] = data[key]
    }
    return res;
  }, {} as IBook )
  
}