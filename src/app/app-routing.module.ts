import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {CustomerRegComponent} from "./components/customer/customer-reg/customer-reg.component";
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  {path:"", component: MainComponent},
  {path:"registration", component: CustomerRegComponent},
  {path:"customers", component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
