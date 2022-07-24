import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitChildComponent } from './emit-child.component';
import {By} from "@angular/platform-browser";

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

  it('should emit on click', async () => {
    spyOn(component.greetingEvent, 'emit');

    // trigger the click
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    let inputElement = fixture.debugElement.query(By.css('#my-input'));

    inputElement.nativeElement.value = "";

    fixture.detectChanges();

    expect(component.greetingEvent.emit).toHaveBeenCalledWith('');
  });
});
