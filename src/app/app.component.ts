import { Component } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'my-app';

  flag:boolean=true;

  hideLogin(status:boolean){
     this.flag=status;
  }


}
