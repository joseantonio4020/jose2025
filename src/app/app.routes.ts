import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { SobreMi } from './components/sobre-mi/sobre-mi';
import { Experiencia } from './components/experiencia/experiencia';
import { Proyectos } from './components/proyectos/proyectos';
import { Gustos } from './components/gustos/gustos';
import { Contacto } from './components/contacto/contacto';
import { Universidad } from './components/universidad/universidad';
import { MateriasFavoritas } from './components/materias-favoritas/materias-favoritas';
import { TrabajosGrupales } from './components/trabajos-grupales/trabajos-grupales';
import { ComoEmpece } from './components/como-empece/como-empece';
import { Motivaciones } from './components/motivaciones/motivaciones';
import { Horario } from './components/horario/horario';
import { Comida } from './components/comida/comida';
import { Musica } from './components/musica/musica';
import { Deportes } from './components/deportes/deportes';
import { Entretenimiento } from './components/entretenimiento/entretenimiento';
import { Proyecto1 } from './components/proyecto1/proyecto1';
import { Proyecto2 } from './components/proyecto2/proyecto2';
import { Tabla } from './components/tabla/tabla';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'experiencia', component: Experiencia },
  { path: 'proyectos', component: Proyectos },
  { path: 'gustos', component: Gustos },
  { path: 'contacto', component: Contacto },
  
  // Sub-páginas de Experiencia
  { path: 'experiencia/universidad', component: Universidad },
  { path: 'experiencia/materias-favoritas', component: MateriasFavoritas },
  { path: 'experiencia/trabajos-grupales', component: TrabajosGrupales },
  { path: 'experiencia/como-empece', component: ComoEmpece },
  { path: 'experiencia/motivaciones', component: Motivaciones },
  { path: 'experiencia/horario', component: Horario },
  
  // Sub-páginas de Gustos
  { path: 'gustos/comida', component: Comida },
  { path: 'gustos/musica', component: Musica },
  { path: 'gustos/deportes', component: Deportes },
  { path: 'gustos/entretenimiento', component: Entretenimiento },
  
  // Sub-páginas de Proyectos
  { path: 'proyectos/proyecto1', component: Proyecto1 },
  { path: 'proyectos/proyecto2', component: Proyecto2 },
  { path: 'proyectos/tabla', component: Tabla }
];
