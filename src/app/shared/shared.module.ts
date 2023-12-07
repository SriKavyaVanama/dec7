import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
