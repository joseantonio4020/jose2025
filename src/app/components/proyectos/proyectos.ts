import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfilService } from '../../services/perfil';

@Component({
  selector: 'app-proyectos',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos implements OnInit {
  busqueda: string = '';
  proyectos: any[] = [];
  proyectosFiltrados: any[] = [];

  constructor(private perfilService: PerfilService) {}

  ngOnInit() {
    this.proyectos = this.perfilService.getProyectos();
    this.proyectosFiltrados = this.proyectos;
  }

  buscarProyecto() {
    if (this.busqueda.trim() === '') {
      this.proyectosFiltrados = this.proyectos;
    } else {
      this.proyectosFiltrados = this.proyectos.filter(p => 
        p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    }
  }

  limpiarBusqueda() {
    this.busqueda = '';
    this.proyectosFiltrados = this.proyectos;
  }
}