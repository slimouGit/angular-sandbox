import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ShopComponent} from "./shop/shop.component";
import {BasketComponent} from "./basket/basket.component";
import {ItemDetailComponent} from "./shop/item-detail/item-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'basket/:id/add', component: BasketComponent},
  {path: 'view/:id', component: ItemDetailComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule {

}
