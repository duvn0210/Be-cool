import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  public phone = '[123456]';
  public title = '[Quiero asesoría en el siguiente tema...]';
}
