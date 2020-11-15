import * as express from 'express';
import { Book, pickBookKeys, IBook } from '../db/models';

export function getBooks (req: express.Request, res: express.Response) {
  const id = req.query.id;
  const query = id ? {_id: id} : {}
  Book.find(query)
    .then((data) => {
        if(data && data.length) {
          res.send(data);
        } else {
          res.status(400);
          res.send({error:'Not found', message: `Book ${id} was not found`})
        }
    })
    .catch(err => {
        console.log("Error",err)
        res.status(500);
        res.send(err);
    })
};

export function addBook (req: express.Request, res: express.Response) {
  if (!req.body) {
      res.sendStatus(400);
  }
  const bookData: IBook = pickBookKeys(req.body);
  const book = new Book(bookData);
  book.save()
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log("Error",err)
      res.status(500);
      res.send(err);
    })
};

export function deleteBook (req: express.Request, res: express.Response) {
  const id = req.query.id;
  if (!id) {
    res.status(400);
    res.send({error:'DeleteError', message:'wrong id'});
  }
  Book.findOneAndDelete({_id: id})
    .then((data) => {
      if(data) {
        res.sendStatus(200);
      } else {
        res.status(400);
        res.send({error:'Not found', message: `Book ${id} was not found`})
      }
    })
    .catch(err => {
        console.log("Error",err)
        res.status(500);
        res.send(err);
    })
};

export function updateBook (req: express.Request, res: express.Response) {
  
  if (!req.body || !req.body.id) {
    res.sendStatus(400);
  }

  const { id }  = req.body;
  const bookData: IBook = pickBookKeys(req.body);
  
  Book.findOneAndUpdate({_id: id}, bookData, {new: true})
    .then((data) => {
      if(data) {
        res.sendStatus(200);
      } else {
        res.status(400);
        res.send({error:'Not found', message: `Book ${id} was not found`})
      }
    })
    .catch((err) => {
        console.log("Error",err)
        res.status(500);
        res.send(err);
    })
};

export function getPages (req: express.Request, res: express.Response) {
  res.render('index',{
    pageTitle: 'Book Inventory',
  });
};

export function getRoot (req: express.Request, res: express.Response) {
  res.render('index',{
    pageTitle: 'Application',
  });
};


