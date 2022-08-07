import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { HeaderComponent } from './Components/header/header.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { CustompipesComponent } from './Components/custompipes/custompipes.component';
import { NgifComponent } from './Components/ngif/ngif.component';
import { NgifswichComponent } from './Components/ngifswich/ngifswich.component';
import { NgforComponent } from './Components/ngfor/ngfor.component';
import { NgstyleComponent } from './Components/ngstyle/ngstyle.component';
import { NgclassComponent } from './Components/ngclass/ngclass.component';
import { InterpolationComponent } from './Components/interpolation/interpolation.component';
import { PropertybindingComponent } from './Components/propertybinding/propertybinding.component';
import { EventbindingComponent } from './Components/eventbinding/eventbinding.component';
import { LazyloadingComponent } from './Components/lazyloading/lazyloading.component';
import { CRUDComponent } from './Components/crud/crud.component';
import { OrderslistComponent } from './Modules/orderslist/orderslist.component';
import { OrdersModule } from './Modules/orders/orders.module';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './CRUD/dashboard/dashboard.component';
import {ReactiveFormsModule}from '@angular/forms';
import { DemoComponent } from './CRUD/demo/demo.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PipesComponent,
    HeaderComponent,
    PagenotfoundComponent,
    CustompipesComponent,
    NgifComponent,
    NgifswichComponent,
    NgforComponent,
    NgstyleComponent,
    NgclassComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    LazyloadingComponent,
    CRUDComponent,
    OrderslistComponent,
    DashboardComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrdersModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
