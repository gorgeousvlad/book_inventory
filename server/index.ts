import * as mongoose from 'mongoose';
import * as express from 'express';
import { join } from 'path';
import * as bodyParser from 'body-parser';
import * as config from './config.json';
import * as users from './data/users.json';
import * as userList from './data/userList.json';
import { getDbConnectionUrl, IDbConfig, connectToDb } from './db/utils';
import { Book, IBookModel, TBookModel, BookSchema, pickBookKeys, IBook } from './db/models';

const app = express();

connectToDb({
    config: config.db as IDbConfig,
    cb: () => app.listen(3000, () => { console.log("Started on port 3000")}) 
});

app.use('/dist', express.static(__dirname + '/../dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set( "views", join( __dirname, "views"));
app.set('view engine', 'ejs');


app.get('/get-books',  (req: express.Request, res: express.Response) => {
    const id = req.query.id;
    console.log('id',id);
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
});

app.post('/add-book', (req: express.Request, res: express.Response) => {
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

});

app.get(['/', '/list', '/profile/:id'], (req: express.Request, res: express.Response) => {
    res.render('index',{
        pageTitle: 'Users Viewer',
    });
});

app.get('/get-user-list', (req: express.Request, res: express.Response) => {
    res.send((userList as any).userList);
});

app.get('/get-user', (req: express.Request, res: express.Response) => {
    const id = req.query.id;
    const usersBase = (users as any).users

    if (Object.keys(usersBase).includes(id)){
        res.send(usersBase[id]);
    } else {
        res.status(400);
        res.send(`User with id ${id} was not found`)
    }

});
