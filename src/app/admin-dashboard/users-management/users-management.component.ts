import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { log } from 'console';

@Component({
  selector: 'app-users-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  statusFilter: string = 'all';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
    console.log (this.users)
  } 

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.applyFilters();
    });
  }

 applyFilters(): void {
  this.filteredUsers = this.users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(this.searchTerm.toLowerCase());
    
    const matchesStatus = this.statusFilter === 'all' || user.type === this.statusFilter;

    return matchesSearch && matchesStatus;
  });
}


  onSearch(): void {
    this.applyFilters();
  }

  onStatusFilterChange(): void {
    this.applyFilters();
  }

//   updateUserStatus(user: User, type: 'admin' | 'buyer' | 'seller'): void {
//   this.userService.updateUserStatus(user.id, type).subscribe(() => {
//     user.type = type;
//   });
// }
 

  deleteUser(id: number): void {
  if (confirm('Are you sure you want to delete this user?')) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers(); 
    });
  }
}

}
