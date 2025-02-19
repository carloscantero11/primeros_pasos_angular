import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideojuegoComponent } from '../videojuego/videojuego.component';
import { ZapatillasComponent } from '../zapatillas/zapatillas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VideojuegoComponent, ZapatillasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo';
}
