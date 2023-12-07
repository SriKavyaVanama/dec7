import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { NameComponent } from './name/name.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { DecimalFormatPipe } from './pipes/decimal-format.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CruncherComponent } from './cruncher/cruncher.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomePageComponent,
    CalculatorComponent,
    ConversionsComponent,
    NameComponent,
    FullNamePipe,
    DecimalFormatPipe,
    CruncherComponent,
  ],
  imports: [CommonModule, RouterModule, HomeRoutingModule, ReactiveFormsModule, FormsModule],
})
export class HomeModule {}
