import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EmitSubscribeValueService {
  emitValue: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  recieveInput(myValue: string) {
    this.emitValue.emit(myValue);
  }
}
