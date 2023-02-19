import { Component } from '@angular/core';
import { faBook, faGlobe, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-beco',
  templateUrl: './beco.component.html',
  styleUrls: ['./beco.component.css']
})
export class BecoComponent {

  faBook = faBook;
  faGlobe = faGlobe;
  faPencil = faPencil;

}
