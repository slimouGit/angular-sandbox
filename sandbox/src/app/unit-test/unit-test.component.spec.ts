import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { UnitTestComponent } from './unit-test.component';
import {UserService} from "./user.service";
import {DataService} from "./shared/data.service";

describe('UnitTestComponent', () => {
  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ UnitTestComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('app was created', () => {
    expect(component).toBeTruthy();
  })

  it("should have as title 'Property Binding'", () => {
    expect(component.title).toEqual("Unit-Test");
  });

  it('should use the username from service', () => {
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.checkNoChanges();
    expect(userService.user.name).toEqual((component.user.name));
  });

  it('should display username if user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain((component.user.name));
  })

  it('should display username if user is not logged in', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain((component.user.name));
  })

  it('it shouldt fetch data successfully if not called asynchronously', () => {
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(component.data).toBe(undefined);
  });

  it('it shouldt fetch data successfully if  called asynchronously', async () => {
    let dataService = fixture.debugElement.injector.get(DataService);
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    });
  });

});
