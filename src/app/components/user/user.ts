import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.scss',
  standalone: true,
  imports: [
   
  ],
})
export class UserComponent {
  @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  name = input.required<string>();//aproach without Input, but with Signal

  get imagePath() {
    return './assets/users/' + this.avatar;
  }

  onSelectUser()
} 
