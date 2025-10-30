import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private datosPersonales = {
    nombre: 'José Antonio Lazo Orihuela',
    carrera: 'Ingeniería de Sistemas',
    universidad: 'UNAJMA',
    ciclo: '5to',
    ubicacion: 'Andahuaylas, Apurímac, Perú',
    email: 'ja994285@gmail.com',
    telefono: '+51 935 318 132'
  };

  private proyectos = [
    {
      id: 1,
      nombre: 'Dispensador de Pastillas',
      descripcion: 'Sistema automático para ayudar a adultos mayores con su medicación',
      tecnologia: 'Arduino',
      año: 2024,
      imagen: 'images/2proyecto1.jpg'
    },
    {
      id: 2,
      nombre: 'Monitor de Calidad del Aire',
      descripcion: 'Detecta contaminantes en espacios cerrados con alertas automáticas',
      tecnologia: 'Arduino + Sensores',
      año: 2025,
      imagen: 'images/2proyecto2.jpg'
    }
  ];

  private habilidades = [
    'Java',
    'Python',
    'C++',
    'Arduino',
    'Base de Datos (SQL)',
    'Redes de Computadoras',
    'HTML/CSS',
    'Git/GitHub'
  ];

  constructor() { }

  // Métodos para obtener datos
  getDatosPersonales() {
    return this.datosPersonales;
  }

  getProyectos() {
    return this.proyectos;
  }

  getHabilidades() {
    return this.habilidades;
  }

  async getProyectosAsync(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.proyectos);
      }, 1000); 
    });
  }
}