import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  {path:'',component:ProductsComponent},
  {path:'view-product',component:ViewProductComponent},
  {path:'delete-product',component:DeleteProductComponent},
  {path:'edit-product',component:EditProductComponent},
  {path:'add-product',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
