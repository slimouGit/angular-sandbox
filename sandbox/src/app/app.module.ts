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

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    OneWayBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    EmitParentComponent,
    EmitChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
