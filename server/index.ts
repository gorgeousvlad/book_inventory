import * as express from 'express';
import { join } from 'path';
import * as users from './data/users.json';
import * as userList from './data/userList.json';

const app = express();
app.use('/dist', express.static(__dirname + '/../dist'));

app.get(['/', '/list', '/profile/:id'], (req: express.Request, res: express.Response) => {
    res.sendFile(join(__dirname, '..', 'index.html'));
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

app.listen(3000, () => {
   console.log("Started on port 3000"); 
})