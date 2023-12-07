import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main/main.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { NameComponent } from './name/name.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'conversions',
    component: ConversionsComponent,
  },
  {
    path: 'name',
    component: NameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
