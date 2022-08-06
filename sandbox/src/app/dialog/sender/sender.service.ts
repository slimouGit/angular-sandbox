import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {Chapter} from "../shared/Chapter";

@Injectable({providedIn: 'root'})
export class SenderService{
  helloEmitter = new Subject<Chapter>();

}
