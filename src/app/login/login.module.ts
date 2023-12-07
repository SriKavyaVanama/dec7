import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule, RouterModule, HomeModule
  ]
})
export class LoginModule { }
