import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloWorld';
  flag:boolean = true;
  Salary=10000;
  permanent="yes";
  department="payroll";
  skills=[{"id":1,"name":"html"},{"id":2,"name":"css"},{"id":3,"name":"javaScript"}];
  index=1;
  date=new Date("02/07/1998");
  
}
