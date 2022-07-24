import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { PropertyBindingComponent } from './property-binding.component';
import {AppComponent} from "../app.component";

describe('PropertyBindingComponent', () => {
  let component: PropertyBindingComponent;
  let fixture: ComponentFixture<PropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
