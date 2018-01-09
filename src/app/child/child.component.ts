import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output('initoChange') emitter: EventEmitter<string> = new EventEmitter<string>();
  @Input('inito') set setInitoValue(value) {
    this.count = value;
  }
  count: number = 0;

  increment() {
    this.count++;
    this.emitter.emit(this.count);
  }

  decrement() {
    this.count--;
    this.emitter.emit(this.count);
  }

}
