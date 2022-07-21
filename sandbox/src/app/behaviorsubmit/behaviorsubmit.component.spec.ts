import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorsubmitComponent } from './behaviorsubmit.component';

describe('BehaviorsubmitComponent', () => {
  let component: BehaviorsubmitComponent;
  let fixture: ComponentFixture<BehaviorsubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorsubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
