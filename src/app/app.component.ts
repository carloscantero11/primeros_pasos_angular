import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideojuegoComponent } from '../videojuego/videojuego.component';
import { ZapatillasComponent } from '../zapatillas/zapatillas.component';
import { CursosComponent } from "../cursos/cursos.component";
import { CommonModule } from '@angular/common';
import { Configuracion } from '../models/configuracion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VideojuegoComponent, ZapatillasComponent, CursosComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'Hola Mundo';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;

  constructor () {
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarVideojuegos () {
    this.mostrar_videojuegos = false;
  }

  mostrarVideojuegos () {
    this.mostrar_videojuegos = true;
  }
}
