import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputServiceComponent } from './input-service.component';

describe('InputServiceComponent', () => {
  let component: InputServiceComponent;
  let fixture: ComponentFixture<InputServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
