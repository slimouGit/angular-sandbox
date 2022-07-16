import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketCounterComponent } from './basket-counter.component';

describe('BasketCounterComponent', () => {
  let component: BasketCounterComponent;
  let fixture: ComponentFixture<BasketCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
