import { Component } from '@angular/core';
import { faGoogle,faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faGooglePlus = faGoogle;
  faFacebook = faFacebook;
  faMinus = faMinus;
}
