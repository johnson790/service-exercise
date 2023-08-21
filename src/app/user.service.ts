import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private users: string[]=[]; //Placeholder for user data
  constructor() { }

  getUsers(): string[] {
    return this.users;
  }
  addUser(user: string): void {
    this.users.push(user);
}
}