import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item!: { id: number, name: string };
  paramNumber!:number;
  paramName:string = '';


  constructor(private route: ActivatedRoute) { 
    this.paramNumber += this.route.snapshot.params['id'];
    this.paramName = this.route.snapshot.params['name'];

    this.route.queryParams.subscribe((params: Params) => {
      console.log("PARAMS ", params);
    });

    this.route.queryParams.subscribe(
      params => console.log('queryParams', params['id']));
  }

  ngOnInit() {
    this.item = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params.subscribe(
      (params: Params) => {
        this.item.id = params['id'];
        this.item.name = params['name'];
      }
    );
    console.log("ID from URL ", this.route.snapshot.paramMap.get('id'));

    this.route.queryParams.forEach(param => console.log(param));
    

  }

}
