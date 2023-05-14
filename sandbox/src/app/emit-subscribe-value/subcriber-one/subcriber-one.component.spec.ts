import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriberOneComponent } from './subcriber-one.component';

describe('SubcriberOneComponent', () => {
  let component: SubcriberOneComponent;
  let fixture: ComponentFixture<SubcriberOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcriberOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcriberOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
