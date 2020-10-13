import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = 'http://localhost:3000/users';  // URL to web api
  
  constructor( private http: HttpClient) { }

  isExist(id: number){
   let userFinded = this.getUserById(+id).subscribe();
   console.log("userFinded=>",userFinded);
    if(userFinded != null)
      return true;
    return false;
  }

  updateUser(userToUpdated: User): Observable<User>{
    return this.http.put<User>(`${this.host}/${userToUpdated.id}`,userToUpdated);
  }

  getUsers(): Observable<User[]>{
     return this.http.get<User[]>(this.host);
   }

   getUserById(id: number): Observable<User>{
    const url = `${this.host}/?id=${id}`;
    return this.http.get<User>(url);

   }

   deleteUser(idUser: number): Observable<User>{
     const url = `${this.host}/${idUser}`;
     console.log('id=',idUser,'url= ',url);
     
     return this.http.delete<User>(url);
   }

   createUser(user: User):Observable<User>{
     return this.http.post<User>(this.host,user);
   }

}
