import * as mongoose from 'mongoose';
import * as express from 'express';
import { join } from 'path';
import * as config from './config.json';
import * as users from './data/users.json';
import * as userList from './data/userList.json';
import { getDbConnectionUrl, IDbConfig, connectToDb } from './db/utils';
import { Book } from './db/models';

const app = express();

connectToDb({
    config: config.db as IDbConfig,
    cb: () => app.listen(3000, () => { console.log("Started on port 3000")}) 
});

app.use('/dist', express.static(__dirname + '/../dist'));
app.set( "views", join( __dirname, "views"));
app.set('view engine', 'ejs');

app.get('/books', (req: express.Request, res: express.Response) => {
    Book.find({})
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send('Error getting books');
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
