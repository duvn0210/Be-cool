import { Component } from '@angular/core';
import { faHouse, faSpa, faDesktop, faBasketShopping, faUserTie, faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-services-b',
  templateUrl: './services-b.component.html',
  styleUrls: ['./services-b.component.css']
})
export class ServicesBComponent {

  faHouse = faHouse;
  faSpa = faSpa;
  faDesktop = faDesktop;
  faBasketShopping = faBasketShopping;
  faUserTie = faUserTie;
  faHeart = faHeart;
}
