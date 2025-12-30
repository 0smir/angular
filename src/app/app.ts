import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { UserComponent} from './components/user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('my-first-ang-app');
  users = DUMMY_USERS;
  
 
  toggleContent() {
    console.log('!!!!!');
     let content = document.getElementsByClassName('content')[0] as HTMLElement;
    if(content.classList.contains('open')){
      content.classList.remove('open');
    }else {
      content.classList.add('open');
    }

  }
}
