import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopComponent } from './shop.component';
import {Item} from "./item/item.model";
import {RouterTestingModule} from "@angular/router/testing";
import {ShopService} from "./shop.service";
import {BasketService} from "../basket/basket.service";
import {Router} from "@angular/router";

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;
  let shopService: ShopService;

  beforeEach(async () => {
    shopService = new ShopService(new BasketService());
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should NOT have heroes immediately after OnInit', () => {

    component.ngOnInit(); // ngOnInit -> getHeroes
    expect(component.items.length).toBe(0);
  });

  // it('sollte zu der Detail-Ansicht weiterleiten', () => {
  //   const item: Item = {id: 42, name: 'Banana', price: 12345};
  //   const spy = spyOn(router, 'navigateByUrl');
  //   component.onSelectItem(item.id);
  //   const navArgs = spy.calls.mostRecent().args[0];
  //   expect(navArgs)
  //     .withContext('should nav to ItemDetail')
  //     .toBe('/view/42');
  // })
});
