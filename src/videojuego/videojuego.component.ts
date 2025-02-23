import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'videojuego',
  imports: [CommonModule],
  templateUrl: './videojuego.component.html',
  styleUrl: './videojuego.component.css',
})

// Hooks / Eventos ciclo de vida
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
  public titulo: string;

  constructor () {
    this.titulo = 'Componentes de Videojuegos'
    console.log("Se ha cargado el componente: videojuego.component.ts")
  }

  // Se llama una vez, después de que Angular haya inicializado las propiedades de entrada.
  ngOnInit () {
      console.log("OnInit ejecutado")
  }

  // Se llama durante cada ciclo de detección de cambios de Angular.
  ngDoCheck () {
      console.log('DoCheck ejecutado')
  } 

  // Se llama justo antes de que Angular destruya el componente.
  ngOnDestroy () {
      console.log('OnDestroy ejecutado')
  }

  cambiarTitulo () {
    this.titulo = 'Nuevo título del componente'
  }
}
