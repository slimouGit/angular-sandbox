import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriberTwoComponent } from './subcriber-two.component';

describe('SubcriberTwoComponent', () => {
  let component: SubcriberTwoComponent;
  let fixture: ComponentFixture<SubcriberTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcriberTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcriberTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
