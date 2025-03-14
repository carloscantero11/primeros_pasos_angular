import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Decorador que define el componente
@Component({
  selector: 'externo',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.css'
})

export class ExternoComponent implements OnInit {
  public user: any; // Almacena los datos del usuario obtenidos de la API
  public userId: any; // Almacena el ID del usuario a buscar

  // Inyección del servicio para hacer peticiones HTTP
  constructor(private _peticionesService: PeticionesService) {
    this.userId = 2; // Valor inicial del ID del usuario
  }

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    this.cargaUsuario(); // Carga los datos del usuario al iniciar
  }

  // Método para cargar los datos del usuario desde la API
  cargaUsuario() {
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data; // Asigna los datos del usuario
        console.log(this.user); // Muestra los datos en consola para depuración
      },
      error => {
        console.log(<any>error); // Manejo de errores
      }
    );
  }
}