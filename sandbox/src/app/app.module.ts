import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {PropertyBindingComponent} from './property-binding/property-binding.component';
import {OneWayBindingComponent} from './one-way-binding/one-way-binding.component';
import {EventBindingComponent} from './event-binding/event-binding.component';
import {TwoWayBindingComponent} from './two-way-binding/two-way-binding.component';
import {EmitParentComponent} from './emit-parent/emit-parent.component';
import {EmitChildComponent} from './emit-parent/emit-child/emit-child.component';
import {RoutingComponent} from './routing/routing.component';
import {BasketComponent} from './routing/basket/basket.component';
import {HomeComponent} from './routing/home/home.component';
import {ShopComponent} from './routing/shop/shop.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './routing/page-not-found/page-not-found.component';
import {ItemDetailComponent} from './routing/shop/item-detail/item-detail.component';
import { HeaderComponent } from './routing/header/header.component';
import {ShopService} from "./routing/shop/shop.service";
import {BasketService} from "./routing/basket/basket.service";
import { ObservableComponent } from './observable/observable.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { BackendCommunicationComponent } from './backend-communication/backend-communication.component';
import { HttpClientModule } from '@angular/common/http';
import { BasketCounterComponent } from './routing/basket/basket-counter/basket-counter.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { PictureComponent } from './wrapper/picture-component/picture.component';
import {RoutingModule} from "./routing/routing.module";
import { BehaviorsubmitComponent } from './behaviorsubmit/behaviorsubmit.component';
import { LittleInputComponent } from './behaviorsubmit/little-input/little-input.component';
import { InputComponentComponent } from './behaviorsubmit/input-component/input-component.component';
import { InputServiceComponent } from './behaviorsubmit/input-service/input-service.component';
import { UnitTestComponent } from './unit-test/unit-test.component';
import {ReversePipe} from "./unit-test/shared/reverse.pipe";
import { ModalComponent } from './modal/modal.component';
import { SenderComponent } from './dialog/sender/sender.component';
import { RecieverComponent } from './dialog/reciever/reciever.component';
import { ChapterTestComponent } from './chapter-test/chapter-test.component';

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
    PageNotFoundComponent,
    ItemDetailComponent,
    HeaderComponent,
    ObservableComponent,
    FormComponent,
    ReactiveFormComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    BackendCommunicationComponent,
    BasketCounterComponent,
    WrapperComponent,
    PictureComponent,
    BehaviorsubmitComponent,
    LittleInputComponent,
    InputComponentComponent,
    UnitTestComponent,
    ReversePipe,
    ModalComponent,
    SenderComponent,
    RecieverComponent,
    ChapterTestComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShopService, BasketService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
