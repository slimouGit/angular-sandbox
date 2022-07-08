import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLoadShop(){
    this.router.navigate(['/shop']);
  }

  onLoadItem(id: number){
    this.router.navigate(['/basket', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

}
