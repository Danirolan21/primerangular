import { Component } from '@angular/core';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrl: './deportes.component.css'
})
export class DeportesComponent {
    public sports: Array<string>;
    public numeros: Array<number>;
    constructor() {
      this.sports = ["Canicas", "Padel", "Petanca", "Futbol", "Atletismo", "Curling"]
      this.numeros = [6, 3, 11, 7, 8, 5, 12]
    }
}
