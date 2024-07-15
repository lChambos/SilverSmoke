import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from "./components/Product/product.component";


const routes: Routes = [

  {
    path: 'product',
    component: ProductComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product'
  },
  {
    path: '**',
    redirectTo: 'product'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
