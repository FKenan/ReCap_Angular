import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ImageComponent } from './components/image/image.component';

const routes: Routes = [
  {path:"",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandid",component:CarComponent},
  {path:"cars/color/:colorid",component:CarComponent},
  {path:"cars/:carid",component:ImageComponent},
  {path:"cars/brand/:brandid/color/:colorid",component:CarComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
