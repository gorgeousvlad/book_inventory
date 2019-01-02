import { IUserList } from "../models/userList";
import { IUser } from '../models/user';

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

export function getUserList() {
   return api<IUserList>(`${baseUrl}:${basePort}/get-user-list`)
   .catch(error => {
       return null;
   });
}

export function getUser(id: number) {
  return api<IUser>(`${baseUrl}:${basePort}/get-user?id=${id}`)
  .catch(error => {
      return null;
  });
}