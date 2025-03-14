import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cursos',
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {
  // Propiedades públicas del componente
  public nombre?: string;
  public followers?: number;
  
  constructor (
    private _route: ActivatedRoute, // Acceso a los parámetros de la ruta
    private _router: Router // Navegación entre rutas
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params['nombre']; // Asigna nombre
      this.followers = +params['followers']; // Asigna seguidores (convertido a número con "+")
      console.log(this.nombre); // Depuración
      });
  }

  // Método para redirigir a la ruta '/zapatillas'
  redirigir() {
    this._router.navigate(['/zapatillas']); // Navega a la ruta especificada
  }

}
