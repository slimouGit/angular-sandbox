import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleInputComponent } from './little-input.component';

describe('LittleInputComponent', () => {
  let component: LittleInputComponent;
  let fixture: ComponentFixture<LittleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LittleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
