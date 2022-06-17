import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './component/brand/brand.component';
import { CarComponent } from './component/car/car.component';
import { ColorComponent } from './component/color/color.component';
import { CustomerComponent } from './component/customer/customer.component';

const routes: Routes = [
  {path:'',pathMatch:"full",component:CarComponent},
  
  {path:'cars',component:CarComponent},
  {path:'cars/:carId',component:CarComponent},

  {path:'customers',component:CustomerComponent},
  {path:'customers/:customerId',component:CustomerComponent},

  {path:'brands',component:BrandComponent},
  {path:'brands/:brandId',component:BrandComponent},

  {path:'colors',component:ColorComponent},
  {path:'colors/:colorId',component:ColorComponent},




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
