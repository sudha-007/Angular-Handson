import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { RegisterComponent } from './register/register.component';
import { UpateComponent } from './upate/upate.component';

const routes: Routes = [

  {path:"register",component:RegisterComponent},
  {path:"update",component:UpateComponent},
  {path:"delete" ,component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
