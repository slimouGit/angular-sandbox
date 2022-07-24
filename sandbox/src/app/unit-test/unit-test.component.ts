import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";
import {DataService} from "./shared/data.service";

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.css'],
  providers: [UserService, DataService]
})
export class UnitTestComponent implements OnInit {

  title:string = 'Unit-Test';
  user: {name: string};
  isLoggedIn = false;
  data: string;

  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data:string) => this.data = data);
  }

}
