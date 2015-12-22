import * as mongoDb from 'mongodb';
import * as connection from './connection';

export class BaseRepository {
    tableName: string;
    connection: connection.Connection;

    constructor(tableName: string) {
        this.tableName = tableName;

        this.connection = new connection.Connection();

        this.connection.db.collection(tableName, function(err, collection) {
            if (err) {
                console.warn('The ' + tableName + ' collection doesnt exist..');
            } else {
                console.log('Connection to ' + tableName + ' succeeded');
            }
        });
    }

    getTableName() {
        return this.tableName;
    }

    getConnection() {
        return this.connection;
    }
}
