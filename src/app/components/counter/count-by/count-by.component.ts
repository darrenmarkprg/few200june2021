import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { countBySet } from 'src/app/actions/counter.actions';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.css']
})
export class CountByComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  setCountBy(by: number) {
    this.store.dispatch(countBySet({ by }));
  }

}
