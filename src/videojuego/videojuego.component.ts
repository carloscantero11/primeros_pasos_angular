import { Component } from '@angular/core';

@Component({
  selector: 'videojuego',
  imports: [],
  templateUrl: './videojuego.component.html',
  styleUrl: './videojuego.component.css',
})
export class VideojuegoComponent {
  public titulo: string;

  constructor () {
    this.titulo = 'Componentes de Videojeugos'
    console.log("Se ha cargado el componente: videojuego.component.ts")
  }
}
