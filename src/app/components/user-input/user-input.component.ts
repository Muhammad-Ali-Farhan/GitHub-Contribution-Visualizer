import { Component, EventEmitter, Output } from '@angular/core';

export interface UserQuery {
  username: string;
  days: number;
}

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  username: string = '';
  days: number = 30;

  @Output() querySubmitted = new EventEmitter<UserQuery>();

  submitQuery(): void {
    if (this.username.trim()) {
      this.querySubmitted.emit({ username: this.username.trim(), days: this.days });
    }
  }
}
