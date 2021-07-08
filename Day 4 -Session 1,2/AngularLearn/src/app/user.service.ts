import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  userAr:User[]=[

    new User("cts","1234"),
    new User("abc","4321"),
    new User("def","1234")

  ];


  validateUser(user:User):boolean{

    for(let u of this.userAr){

      if(u.name===user.name && u.password===user.password){
        return true;
      }
     
    }
    return false;
  }

  constructor() { }
}
