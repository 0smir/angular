import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { UserComponent} from './components/user/user';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./components/tasks/tasks";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
   imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TasksComponent
],
})
export class App {
  protected readonly title = signal('my-first-ang-app');
  users = DUMMY_USERS;
  selectedUserID = 'u1';

  onSelectUser(id: string){
    console.log('!!!!! user id: ' + id);
   this.selectedUserID = id;
  }
 
  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserID)!;
  }
}
