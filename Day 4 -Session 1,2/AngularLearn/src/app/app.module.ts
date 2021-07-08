import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MymoduleModule } from './mymodule/mymodule.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpateComponent } from './upate/upate.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UpateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MymoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
