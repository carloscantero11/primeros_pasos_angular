import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Decorador que define el componente ZapatillasComponent
@Component({
  selector: 'zapatillas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './zapatillas.component.html',
  styleUrl: './zapatillas.component.css',
})

// Propiedades del componente
export class ZapatillasComponent implements OnInit {
  public titulo: string = 'Componente de zapatilla'; // Título del componente
  public zapatillas: Array<Zapatilla>; // Lista de zapatillas
  public marcas: String[]; // Lista de marcas de zapatillas
  public color: string; // Color predominante
  public mi_marca: string; // Marca ingresada por el usuario

  constructor() {
    this.mi_marca = '';
    this.color = 'yellow';
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('Air Jordan', 'Nike', 'Blanco', 230, true),
      new Zapatilla('F-50', 'Adidas', 'Azul', 120, true),
      new Zapatilla('Classic', 'Reebok', 'Blanco', 80, false),
    ];
  }

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    console.log(this.zapatillas); // Muestra las zapatillas en consola
    this.getMarcas(); // Obtiene las marcas de las zapatillas
  }

  // Método para obtener las marcas de las zapatillas
  getMarcas() {
    this.zapatillas.forEach((zapatillas, index) => {
      this.marcas.push(zapatillas.marca); // Agrega cada marca al array
    });
    console.log(this.marcas); // Muestra las marcas en consola
  }

  // Método para mostrar la marca ingresada por el usuario
  getMiMarca() {
    alert(this.mi_marca); // Muestra la marca en un alert
  }

  // Método para agregar una nueva marca
  addMiMarca() {
    if (this.mi_marca.trim() !== '') {
      // Verifica que la marca no esté vacía
      this.marcas.push(this.mi_marca); // Agrega la marca al array
      this.mi_marca = ''; // Limpia el input
    }
  }

  // Método para borrar una marca
  borrarMarca(index: number) {
    this.marcas.splice(index, 1); // Elimina la marca en la posición 'index'
  }
}
