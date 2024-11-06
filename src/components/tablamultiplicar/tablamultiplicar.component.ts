import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent {

    @ViewChild("cajanumero") cajaNumero: ElementRef

    public operacion: Array<string>;
    public resultado: Array<number>;

    constructor() {
      this.cajaNumero = new ElementRef(0);
      this.operacion = []
      this.resultado = []      
    }

    counter(i: number) {
      return new Array(i);
    }

    mostrarTabla(): void {
      let numero = parseInt(this.cajaNumero.nativeElement.value);
      this.operacion = []
      this.resultado = []

      for (var i = 1; i <= 10; i++) {
        this.operacion.push(numero + " x " + i + " =");
        this.resultado.push(numero * i)
      }
    }
}
