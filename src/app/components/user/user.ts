import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class UserComponent {
  public selectedUser = signal(DUMMY_USERS[randomIndex]);
  public imgUrl = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // get imgUrl(){
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
  
} 
