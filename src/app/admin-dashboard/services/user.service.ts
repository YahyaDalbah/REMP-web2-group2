import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'User',
      status: 'active',
      registrationDate: new Date('2023-01-15')
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Agent',
      status: 'active',
      registrationDate: new Date('2023-02-20')
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert@example.com',
      role: 'User',
      status: 'suspended',
      registrationDate: new Date('2023-03-10')
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily@example.com',
      role: 'Agent',
      status: 'inactive',
      registrationDate: new Date('2023-04-05')
    },
    {
      id: 5,
      name: 'Michael Wilson',
      email: 'michael@example.com',
      role: 'User',
      status: 'active',
      registrationDate: new Date('2023-05-12')
    }
  ];

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find(u => u.id === id);
    return of(user);
  }

  updateUserStatus(id: number, status: 'active' | 'inactive' | 'suspended'): Observable<User | undefined> {
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
      this.users[userIndex].status = status;
      return of(this.users[userIndex]);
    }
    return of(undefined);
  }

  deleteUser(id: number): Observable<boolean> {
    const initialLength = this.users.length;
    this.users = this.users.filter(u => u.id !== id);
    return of(this.users.length !== initialLength);
  }
}
