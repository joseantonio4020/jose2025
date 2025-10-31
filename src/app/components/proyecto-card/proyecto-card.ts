import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-proyecto-card',
  imports: [],
  templateUrl: './proyecto-card.html',
  styleUrl: './proyecto-card.css'
})
export class ProyectoCard {
  @Input() proyecto: any;
  @Output() proyectoClick = new EventEmitter<any>();

  onClickProyecto() {
    this.proyectoClick.emit(this.proyecto);
  }
}