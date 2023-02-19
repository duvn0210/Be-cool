import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, {Navigation, Pagination} from 'swiper'

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TeamComponent {

}
