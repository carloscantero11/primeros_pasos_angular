import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule,],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit{
  public usuario: ContactoUsuario; // Objeto para almacenar los datos del usuario
  
  constructor() {
    // Inicializa el objeto usuario con valores vacíos
    this.usuario = new ContactoUsuario('', '', '', '');
  }

  ngOnInit() {
      
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(form: any) {
    // Muestra los datos del usuario en consola
    console.log("Evento Submit Lanzado " + JSON.stringify(this.usuario));
    form.reset(); // Resetea el formulario después del envío
  }
}
