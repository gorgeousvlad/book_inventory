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

export const Book: Model<IBookModel> = model<IBookModel>('Book',BookSchema);