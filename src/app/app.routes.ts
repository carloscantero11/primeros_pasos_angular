// Importar modulos del router de Angular
import { Routes } from '@angular/router';

// Importar componentes
import { VideojuegoComponent } from '../videojuego/videojuego.component';
import { ZapatillasComponent } from '../zapatillas/zapatillas.component';
import { CursosComponent } from "../cursos/cursos.component";
import { HomeComponent } from '../home/home.component';
import { ExternoComponent } from '../externo/externo.component';
import { ContactoComponent } from '../contacto/contacto.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'videojuegos', component: VideojuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/', component: CursosComponent},
  {path: 'cursos/:nombre/:followers', component: CursosComponent},
  {path: 'externo', component: ExternoComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];
