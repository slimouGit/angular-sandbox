import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitChildComponent } from './emit-child.component';

describe('EmitChildComponent', () => {
  let component: EmitChildComponent;
  let fixture: ComponentFixture<EmitChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
