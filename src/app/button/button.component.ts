import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input()  houseName: string = ""
  //@Output() choosenHouseName: EventEmitter<void> = new EventEmitter<void>()
  @Output() choosenHouse: EventEmitter<void> = new EventEmitter<void>()
  @Output() getHouse: EventEmitter<void> = new EventEmitter<void>()

  chooseHouse(){
    //console.log(this.houseName)
    //this.choosenHouseName.emit()
    this.choosenHouse.emit()
    this.getHouse.emit()
  }
}
