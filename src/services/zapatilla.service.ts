import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

// Decorador que marca la clase como un servicio inyectable
@Injectable({
  providedIn: 'root' // Indica que el servicio está disponible en toda la aplicación
})
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>; // Array para almacenar las zapatillas

  // Constructor del servicio
  constructor() {
    // Inicializa el array de zapatillas con datos de ejemplo
    this.zapatillas = [
      new Zapatilla('Air Jordan', 'Nike', 'Blanco', 230, true), // Zapatilla 1
      new Zapatilla('F-50', 'Adidas', 'Azul', 120, true), // Zapatilla 2
      new Zapatilla('Classic', 'Reebok', 'Blanco', 80, false), // Zapatilla 3
    ];
  }

  // Método que devuelve un texto de prueba
  getTexto(): string {
    return "Hola Mundo desde un servicio"; // Retorna un mensaje de prueba
  }

  // Método que devuelve el array de zapatillas
  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas; // Retorna el array de zapatillas
  }
}