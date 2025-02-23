// Importar modulos del router de Angular
import { Routes } from '@angular/router';

// Importar componentes
import { VideojuegoComponent } from '../videojuego/videojuego.component';
import { ZapatillasComponent } from '../zapatillas/zapatillas.component';
import { CursosComponent } from "../cursos/cursos.component";
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'videojuegos', component: VideojuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: '**', component: HomeComponent}
];
