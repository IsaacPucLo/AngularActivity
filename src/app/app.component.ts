import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { DecrementarAction, IncrementarAction } from './contador/contador.actions';


interface AppState{
  contador: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number =10;

  constructor( private store: Store<AppState>) {

    this.store.subscribe(state => {
      console.log(state);
      this.contador = state.contador;
    });
  }

  incrementar() {
    //this.contador ++;
    const action = new IncrementarAction();

    this.store.dispatch(action);
  }

  decrementar() {
    //this.contador --;
    const action = new DecrementarAction();

    this.store.dispatch(action);
  }


}
