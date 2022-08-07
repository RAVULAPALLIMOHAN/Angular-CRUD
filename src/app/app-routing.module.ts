import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CRUDComponent } from './Components/crud/crud.component';
import { CustompipesComponent } from './Components/custompipes/custompipes.component';
import { HeaderComponent } from './Components/header/header.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './CRUD/dashboard/dashboard.component';
import { DemoComponent } from './CRUD/demo/demo.component';
import { OrderslistComponent } from './Modules/orderslist/orderslist.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'pipes/custom',component:PipesComponent},
  {path:'crud',component:CRUDComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'orders-list',component:DemoComponent},
  {path:'demo',component:DemoComponent}, 
  {path:'**',component:PagenotfoundComponent},
 
  {path:'pipe',children:[
    {path:'custom',component:CustompipesComponent}
  ]},
  { path: 'products', loadChildren: () => import('./Modules/products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
