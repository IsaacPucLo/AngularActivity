import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>(); //Verificar siempre que se importe de Angular core y el <number> quiere decir que emite un número

  constructor() {
    this.contador = 0;
  }

  ngOnInit(): void {
  }

  multiplicar() {
    this.contador *= 2;
    this.cambioContador.emit(this.contador); //Emite el contador, se necesita que alguien escuche el evento (El padre en este caso)
  }

  dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador); //Emite el contador
  }

  resetNieto(nuevoContador: number) {
    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador); //Emite el contador
  }
}
