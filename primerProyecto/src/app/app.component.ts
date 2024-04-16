import { Component, input, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  promedioEdad! : number;
  sumaEdades!: number;

  @ViewChild('promedioInput',{static:false}) promedioInput!: ElementRef;
  @ViewChild('sumaInput',{static:false}) sumaInput!: ElementRef;
  @ViewChild('edadUno',{static:false}) edadUno!: ElementRef;
  @ViewChild('edadDos',{static:false}) edadDos!: ElementRef;

  calcularEdades(){
    this.promedioEdad = (Number(this.edadUno.nativeElement.value)  + Number(this.edadDos.nativeElement.value)) / 2;
    this.sumaEdades = Number(this.edadUno.nativeElement.value)  + Number(this.edadDos.nativeElement.value);
    this.promedioInput.nativeElement.value = this.promedioEdad;
    this.sumaInput.nativeElement.value = this.sumaEdades;
  }

  limpiarInputs(){
    this.promedioInput.nativeElement.value = null;
    this.sumaInput.nativeElement.value = null;
  }
}
