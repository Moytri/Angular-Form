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

  public userModel = new User("", "moytri@gmail.com", "7794952346", '', 'morning', false);
}
