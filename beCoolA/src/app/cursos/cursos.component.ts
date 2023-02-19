import { Component } from '@angular/core';
import { curso } from '../core/models/curso.model';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos: curso[] = [
    {
      name: 'Psicología',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/Apoyo_psico.jpg',
      type: 'espiritual'
    },
    {
      name: 'Baile',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/Baile.jpg',
      type: 'fisico'
    },
    {
      name: 'Habilidades blandas',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/Blandas.jpg',
      type: 'espiritual'
    },
    {
      name: 'Crecimiento personal',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/Crecimiento_personal.jpg',
      type: 'espiritual'
    },
    {
      name: 'Dieta',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/dieta.jpg',
      type: 'fisico'
    },
    {
      name: 'Ejercicio',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/Ejercicio_casa.jpg',
      type: 'fisico'
    },
    {
      name: 'Atletismo',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/foto-post-5.jpg',
      type: 'fisico'
    },
    {
      name: 'Fotografia',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/Fotografia.jpg',
      type: 'Otros'
    },
    {
      name: 'Inglés',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/ingl.jpg',
      type: 'Otros'
    },
    {
      name: 'Música',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/musica.jpg',
      type: 'Otros'
    },
    {
      name: 'Teatro',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/teat.jpg',
      type: 'Otros'
    },
    {
      name: 'Dibujo',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/dibujo (1).jpg',
      type: 'Otros'
    },
    {
      name: 'Meditacion',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/Meditacion.jpg',
      type: 'espiritual'
    },
    {
      name: 'Yoga',
      profesor: 'Cesar trujillo',
      url: '../../assets/images/cursos/Yoga.jpg',
      type: 'espiritual'
    },
  ]
  filtrados: curso[] = [];
  mostrarCursos = this.cursos;
 atributo = 'category';

   mostrarTodo() {
    this.mostrarCursos = this.cursos;
  }

  mostrarPorType(type:string) {
    this.filtrados = this.cursos.filter((curso) => curso.type === type);
    this.mostrarCursos = this.filtrados;
  }
}
