import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'zapatillas',
  imports: [CommonModule],
  templateUrl: './zapatillas.component.html',
  styleUrl: './zapatillas.component.css'
})
export class ZapatillasComponent implements OnInit{
  public titulo: string = "Componente de zapatilla"

  public zapatillas: Array<Zapatilla>;

  constructor () {
    this.zapatillas = [
      new Zapatilla('Air Jordan', 'Nike', 'Blanco', 230, true),
      new Zapatilla('F-50', 'Adidas', 'Azul', 120, true),
      new Zapatilla('Classic', 'Reebok', 'Blanco', 80, false)
    ];
  }

  ngOnInit () {
    console.log(this.zapatillas)
  }

}
