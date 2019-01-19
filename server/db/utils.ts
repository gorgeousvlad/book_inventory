import * as mongoose from 'mongoose';

export interface IDbConfig {
  protocol: string; 
  host: string; 
  port: number; 
  database: string;
}

export interface IDbConnectionParams {
  config: IDbConfig;
  cb(): void;
}

export function getDbConnectionUrl(config: IDbConfig) {
  const {protocol, host, port, database} = config;

  return `${protocol}://${host}:${port}/${database}`;
}

export function connectToDb(params: IDbConnectionParams) {
  mongoose.connect(getDbConnectionUrl(params.config),{ useNewUrlParser: true }, (err) => {
      if(err) {
        console.log(`Error connecting to Mongo ${err}`)
      }
      params.cb();
  });
}