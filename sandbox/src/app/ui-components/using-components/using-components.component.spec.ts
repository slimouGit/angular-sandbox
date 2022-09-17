import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingComponentsComponent } from './using-components.component';

describe('UsingComponentsComponent', () => {
  let component: UsingComponentsComponent;
  let fixture: ComponentFixture<UsingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
