import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  flag: boolean=false;
  flag1: boolean=false;

  employee={"name":"anuj","salary":10000};

  click(): void{
    this.flag=true;
  }
 login(){
   this.flag1=true;
 }
}
