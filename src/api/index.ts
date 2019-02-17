import { IBook } from '../../server/db/models';

const baseUrl = 'http://localhost';
const basePort = '3000';

function api<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json();
    })
}

export type TBookRecord = IBook & {_id: string} 

//there will be different apis for book list and book in future
export function getBooks() {
  return api<TBookRecord[]>(`${baseUrl}:${basePort}/get-books`)
  .catch(error => {
      return null;
  });
}

export function getBookById(id: string) {
  return api<TBookRecord[]>(`${baseUrl}:${basePort}/get-books?id=${id}`)
  .then(response => response[0])
  .catch(error => { return null; });
}