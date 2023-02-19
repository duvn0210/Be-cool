import { Component } from '@angular/core';
import { article } from '../core/models/article.model';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  faCartShopping = faCartShopping;
  faStar = faStar;
  articles: article[] = [

    //espirituales
    {
      name:'Emociones para la vida',
      url:'../../assets/images/espirituales/01.jpg',
      category:'espiritual',
      type:'Book',
      price:10
    },
    {
      name:'El cerebro del niño',
      url:'../../assets/images/espirituales/02.jpg',
      category:'espiritual',
      type:'Book',
      price:10
    },
    {
      name:'La triple E',
      url:'../../assets/images/espirituales/03.jpg',
      category:'espiritual',
      type:'Book',
      price:10
    },
    {
      name:'El equilibrio emocional',
      url:'../../assets/images/espirituales/04.jpg',
      category:'espiritual',
      type:'Book',
      price:10
    },

    //fisico
    {
      name:'maquina para press',
      url:'../../assets/images/fisicos/01.png',
      category:'fisico',
      type:'Maquina',
      price:10
    },
    {
      name:'Barra con pesa',
      url:'../../assets/images/fisicos/02.png',
      category:'fisico',
      type:'Pesa',
      price:10
    },
    {
      name:'caminadora',
      url:'../../assets/images/fisicos/03.png',
      category:'fisico',
      type:'Maquina',
      price:10
    },
    {
      name:'maquina completa',
      url:'../../assets/images/fisicos/04.png',
      category:'fisico',
      type:'Maquina',
      price:10
    },
    {
      name:'mancuernas',
      url:'../../assets/images/fisicos/Dumbbells-Transparent-PNG.png',
      category:'fisico',
      type:'Pesa',
      price:10
    },
    {
      name:'mancuernas',
      url:'../../assets/images/fisicos/png-transparent-dumbbell-weight-training-exercise-kettlebell-physical-fitness-dumbbells-physical-fitness-sports-equipment-sports.png',
      category:'fisico',
      type:'Pesa',
      price:10
    },

    //estres
    {
      name:'articulo',
      url:'../../assets/images/estres/01.jpg',
      category:'espiritual',
      type:'antiestres',
      price:10
    },
    {
      name:'articulo',
      url:'../../assets/images/estres/02.jpg',
      category:'espiritual',
      type:'antiestres',
      price:10
    },
    {
      name:'articulo',
      url:'../../assets/images/estres/03.png',
      category:'espiritual',
      type:'antiestres',
      price:10
    },
    {
      name:'articulo',
      url:'../../assets/images/estres/04.png',
      category:'espiritual',
      type:'antiestres',
      price:10
    },
  ]
  filtrados: article[] = [];
  mostrarArticles = this.articles;
  atributo = 'category';

   mostrarTodo() {
    this.mostrarArticles = this.articles;
  }

    mostrarPorCategoria(category:string)  {
    this.filtrados = this.articles.filter((article) => article.category === category);
    this.mostrarArticles = this.filtrados;
  }

  mostrarporType(type:string) {
    this.filtrados = this.articles.filter((article) => article.type === type);
    this.mostrarArticles = this.filtrados;
  }
}
