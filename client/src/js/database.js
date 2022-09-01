import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initDb = async () => {
  openDB('contact_db', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('contacts')) {
        console.log('Contacts store aleady exists.');
        return;
      }
      db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
      console.log('Contacts store created.');
    }
  })
}