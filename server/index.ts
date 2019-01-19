import * as mongoose from 'mongoose';
import * as express from 'express';
import { join } from 'path';
import * as bodyParser from 'body-parser';
import * as config from './config.json';
import { IDbConfig, connectToDb } from './db/utils';
import { Book, pickBookKeys, IBook } from './db/models';
import {router} from './routes/router';

const app = express();

connectToDb({
  config: config.db as IDbConfig,
  cb: () => app.listen(3000, () => { console.log("Started on port 3000")}) 
});

app.use('/dist', express.static(__dirname + '/../dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
app.set( "views", join( __dirname, "views"));
app.set('view engine', 'ejs');

process.on("SIGINT", () => {
  mongoose.disconnect();
  process.exit();
});
