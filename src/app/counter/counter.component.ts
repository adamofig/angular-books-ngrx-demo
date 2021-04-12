import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment } from './state/counter.actions';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onIncrement() {
    console.log("Haciendo incremento")
    this.store.dispatch(increment());
  }
}
