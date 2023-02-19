import { Component } from '@angular/core';
import { turismo } from '../core/models/turismo.model';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.component.html',
  styleUrls: ['./turismo.component.css']
})
export class TurismoComponent {
  turismos:turismo[] = [
    {
      title: 'Caño Cristales',
      url: '../../assets/images/turismo/caño-crsitales.jpg',
      date: '12 Feb 2023',
      price:10,
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',

    },
    {
      title: 'Ciudad perdida',
      url: '../../assets/images/turismo/ciudad-perdida.jpg',
      price:10,
      date: '11 Ene 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',

    },
    {
      title: 'Cocorna',
      url: '../../assets/images/turismo/cocorna.jpg',
      price:10,
      date: '15 Feb 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',

    },
    {
      title: 'Cueva del esplendor',
      url: '../../assets/images/turismo/cueva-del-esplendor.jpg',
      price:10,
      date: '20 Marz 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',

    },
    {

      title: 'Guatape',
      url: '../../assets/images/turismo/guatape.jpg',
      price:10,
      date: '17 Mar 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',

    },
    {

      title: 'Jardin botanico',
      url: '../../assets/images/turismo/jardin-botanico.jpg',
      price:10,
      date: '12 Feb 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',

    },
    {

      title: 'Parque explora',
      url: '../../assets/images/turismo/parque explora.jpg',
      price:10,
      date: '12 Feb 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',

    },
    {

      title: 'Parque arvi',
      url: '../../assets/images/turismo/parque-arvi.jpg',
      price:10,
      date: '12 Feb 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',

    },
    {
      title: 'Valle del cocora',
      url: '../../assets/images/turismo/valle-del-cocora.jpg',
      price:10,
      date: '12 Feb 2023',
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate eumhic numquam amet, harum adipisci quod atque accusamus consequatur dignissimos iste, pariatur provident, ex quaerat aspernatur. Voluptas, maiores architecto?',
    },
  ]
}
