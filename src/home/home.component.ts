import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public identificado: boolean;

  constructor () {
    this.identificado = false;
  }

  ngOnInit () {

  }

  setIdentificado () {
    this.identificado = true;
  }

  unSetIdentificacion () {
    this.identificado = false;
  }

}
