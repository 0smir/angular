import { Component, Input, Output, EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.scss',
  standalone: true
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  // name = input.required<string>();//aproach without Input, but with Signal
  //select = output<string>();// aproach of usage output function, but it is NOT Signal
  @Output() select = new EventEmitter();

  get imagePath() {
    return './assets/users/' + this.avatar;
  }

  onSelectUser(){
    this.select.emit(this.id);
  }
} 
