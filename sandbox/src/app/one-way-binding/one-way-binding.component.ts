import { Component } from '@angular/core';
import { User } from './model/user.model';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent {

  user1:User = new User('Mimi','Mimi@Smarti.de');

 

}
