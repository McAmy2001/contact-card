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

export const getDb = async () => {
  console.log('GET from the database.');
  const contactDb = await openDB('contact_db', 1);
  const tx = contactDb.transaction('contacts', 'readonly');
  const store = tx.objectStore('contacts');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
}

export const postDb = async (name, email, phone, profile) => {
  console.log('POST to the DB.');
  const contactDb = await openDB('contact_db', 1);
  const tx = contactDb.transaction('contacts', 'readwrite');
  const store = tx.objectStore('contacts');
  const request = store.add({ name: name, email: email, phone: phone, profile: profile });
  const result = await request;
  console.log('Data saved to DB', result);
}