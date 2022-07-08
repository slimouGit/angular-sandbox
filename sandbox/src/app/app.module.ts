import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { EmitParentComponent } from './emit-parent/emit-parent.component';
import { EmitChildComponent } from './emit-parent/emit-child/emit-child.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './routing/home/home.component';
import { ShopComponent } from './routing/shop/shop.component';
import { BasketComponent } from './routing/basket/basket.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './routing/basket/item/item.component';

const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'basket',component:BasketComponent},
  {path: 'basket/:id/:name',component:BasketComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    OneWayBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    EmitParentComponent,
    EmitChildComponent,
    RoutingComponent,
    HomeComponent,
    ShopComponent,
    BasketComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
