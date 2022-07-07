import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitParentComponent } from './emit-parent.component';

describe('EmitParentComponent', () => {
  let component: EmitParentComponent;
  let fixture: ComponentFixture<EmitParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
