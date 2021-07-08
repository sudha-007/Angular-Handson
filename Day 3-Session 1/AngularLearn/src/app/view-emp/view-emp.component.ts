import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'helloWorld';
  flag:boolean = true;
  Salary=10000;
  permanent="yes";
  department="payroll";
  skills=[{"id":1,"name":"html"},{"id":2,"name":"css"},{"id":3,"name":"javaScript"}];
  index=1;
  date=new Date("02/07/1998");

}
