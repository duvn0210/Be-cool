import { Component } from '@angular/core';
import { faStar, faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  faStar = faStar;
  faHeart = faHeart;
}
