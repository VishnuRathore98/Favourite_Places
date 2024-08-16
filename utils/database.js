import * as SQLite from 'expo-location';
// import { openDatabaseAsync } from 'expo-sqlite';

const database = SQLite.openDatabaseAsync('places.db');

export function init(){
    
}