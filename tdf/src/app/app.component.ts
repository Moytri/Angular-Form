import { Component } from '@angular/core';
import { User} from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;
  submitted = false;
  errMessage = '';
  public myOption = "my-option";

  public userModel = new User("Moytri", "moytri@gmail.com", "7784952346", 'default', 'morning', false);

  //Injected Service
  constructor (private _enrollmentService: EnrollmentService) {

  }
  validateTopic(value) {
  		if(value == 'default') {
  			this.topicHasError = true;
  		}
  		else {
  			this.topicHasError = false;
  		}
    }

    onSubmit() {
      this.submitted = true;
    	console.log(this.userModel);
    	this._enrollmentService.enroll(this.userModel)
    	.subscribe(
    		data => console.log('Success!', data),
    		error => this.errMessage = error.statusText
        //console.log('Error!', error)
    	)
    }
}
