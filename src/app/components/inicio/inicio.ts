import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfilService } from '../../services/perfil';
import { ProyectoCard } from '../proyecto-card/proyecto-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, CommonModule, ProyectoCard],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio implements OnInit {
  proyectos: any[] = [];
  cargando: boolean = true;

  constructor(
    private perfilService: PerfilService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarProyectos();
  }

  async cargarProyectos() {
    this.cargando = true;
    this.proyectos = await this.perfilService.getProyectosAsync();
    this.cargando = false;
  }

  onProyectoSeleccionado(proyecto: any) {
    console.log('Proyecto seleccionado:', proyecto.nombre);
    this.router.navigate(['/proyectos/proyecto' + proyecto.id]);
  }
}