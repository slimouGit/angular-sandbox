import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class SenderService{
  helloEmitter = new Subject<string>();

}
