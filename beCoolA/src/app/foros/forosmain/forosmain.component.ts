import { Component } from '@angular/core';
import { Foro } from 'src/app/core/models/foro.model';
@Component({
  selector: 'app-forosmain',
  templateUrl: './forosmain.component.html',
  styleUrls: ['./forosmain.component.css']
})
export class ForosmainComponent {
  cards:Foro[] = [
    {
      category: 'ESPIRITUAL',
      title: 'Como mejorar tu relacion con Dios',
      url: '../../assets/images/foto-post-1.jpg',
      name: 'Karla Andrade',
      date: '12 Feb 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',
      urlname: '../../../assets/images/foto-perfil-1.jpg'
    },
    {
      category: 'ESPIRITUAL',
      title: 'Si tu estas con Dios, ¿Quien contra ti?',
      url: '../../assets/images/foto-post-2.jpg',
      name: 'Camila Sanchez',
      date: '11 Ene 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',
      urlname: '../../../assets/images/foto-perfil-1.jpg'
    },
    {
      category: 'ESPIRITUAL',
      title: 'Como alimentarlos espiritualmente',
      url: '../../assets/images/foto-post-3.jpg',
      name: 'Santiago Puerta',
      date: '15 Feb 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',
      urlname: '../../../assets/images/foto-perfil-1.jpg'
    },
    {
      category: 'FISICA',
      title: 'Como empezar a tener una vida mas saludable',
      url: '../../assets/images/foto-post-4.jpg',
      name: 'Santiago Puerta',
      date: '20 Marz 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',
      urlname: '../../../assets/images/foto-perfil-1.jpg'
    },
    {
      category: 'FISICA',
      title: 'Mejora tu estado fisico',
      url: '../../assets/images/foto-post-5.jpg',
      name: 'Santiago Puerta',
      date: '17 Mar 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',
      urlname: '../../../assets/images/foto-perfil-1.jpg'
    },
    {
      category: 'FISICA',
      title: 'Que hacer ante una leccion',
      url: '../../assets/images/foto-post-6.jpg',
      name: 'Santiago Puerta',
      date: '12 Feb 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',
      urlname: '../../../assets/images/foto-perfil-1.jpg'
    },
    {
      category: 'MENTAL',
      title: 'Como subir tu estado de animo',
      url: '../../assets/images/foto-post-7.jpg',
      name: 'Santiago Puerta',
      date: '12 Feb 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',
      urlname: '../../../assets/images/foto-perfil-1.jpg'
    },
    {
      category: 'MENTAL',
      title: 'Empieza a hablar sobre como te sientes',
      url: '../../assets/images/foto-post-8.jpg',
      name: 'Santiago Puerta',
      date: '12 Feb 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',
      urlname: '../../../assets/images/foto-perfil-1.jpg'
    },
    {
      category: 'MENTAL',
      title: 'Por qué siempre quiero llorar',
      url: '../../assets/images/foto-post-9.jpg',
      name: 'Santiago Puerta',
      date: '12 Feb 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',
      urlname: '../../../assets/images/foto-perfil-1.jpg'
    },
  ]
  filtrados: Foro[] = [];
  mostrarCards = this.cards;
 atributo = 'category';

   mostrarTodo() {
    this.mostrarCards = this.cards;
  }

  mostrarPorCategoria(category:string) {
    this.filtrados = this.cards.filter((card) => card.category === category);
    this.mostrarCards = this.filtrados;
  }
}
