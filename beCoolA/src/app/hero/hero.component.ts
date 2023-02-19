import { Component, ViewEncapsulation} from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper'

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent {

}
