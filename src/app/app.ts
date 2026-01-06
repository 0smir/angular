import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { UserComponent} from './components/user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
   imports: [
    RouterOutlet,
    HeaderComponent, 
    UserComponent
  ],
})
export class App {
  protected readonly title = signal('my-first-ang-app');
  users = DUMMY_USERS;

  onSelectUser(id: string){
    console.log('!!!!! user id: ' + id);
  }
 
  toggleContent() {
    console.log('!!!!!');
  }
}
