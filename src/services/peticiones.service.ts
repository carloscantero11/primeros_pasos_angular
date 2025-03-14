import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // HttpClient para hacer peticiones HTTP
import { Observable } from 'rxjs'; // Observable para manejar respuestas asíncronas

// Decorador que marca la clase como un servicio inyectable
@Injectable({
  providedIn: 'root' // Indica que el servicio está disponible en toda la aplicación
})
export class PeticionesService {
  public url: string; // URL base de la API

  // Constructor con inyección de HttpClient
  constructor(public _http: HttpClient) {
    this.url = 'https://reqres.in/'; // Asigna la URL base de la API
  }

  // Método para obtener un usuario por su ID
  getUser(userId: any): Observable<any> {
    return this._http.get(this.url + 'api/users/' + userId); // Realiza una petición GET a la API
  }
}