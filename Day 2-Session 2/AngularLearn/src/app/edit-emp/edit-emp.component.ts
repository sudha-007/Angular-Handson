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
  click(): void{
    this.flag=true;
    //alert("This is working");
  }

}
