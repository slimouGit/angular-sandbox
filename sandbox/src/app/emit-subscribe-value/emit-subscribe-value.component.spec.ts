import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitSubscribeValueComponent } from './emit-subscribe-value.component';

describe('EmitSubscribeValueComponent', () => {
  let component: EmitSubscribeValueComponent;
  let fixture: ComponentFixture<EmitSubscribeValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitSubscribeValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitSubscribeValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
