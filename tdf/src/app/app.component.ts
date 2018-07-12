import { Component } from '@angular/core';
import { User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];

  public myOption = "my-option";

  public userModel = new User("Moytri", "moytri@gmail.com", "779-495-2346", '', 'morning', false);
}
