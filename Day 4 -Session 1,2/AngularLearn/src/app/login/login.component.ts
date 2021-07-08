import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userService:UserService) { }

  @Output()
  eventEmitter=new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  name="";
  password:string="";
  status:string="";
  login(){

    let user=new User(this.name,this.password);

    if(this.userService.validateUser(user)){
      this.eventEmitter.emit(false);
    }
     else{
       this.status="invalid credentials";
     }

  }

}
