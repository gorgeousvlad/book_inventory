import { IUserData } from "../components/user_list";

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

export function getUsers() {
   return api<IUserData>(`${baseUrl}:${basePort}/users`)
   .catch(error => {
       return {};
   });
}