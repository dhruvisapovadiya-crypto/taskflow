import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Online' | 'Away' | 'Offline';
  tasks: number;
  completed: number;
  performance: number;
  avatar: string;
}

@Component({
  selector: 'app-team-members',
  imports: [CommonModule,RouterLink],
  standalone:true,
  templateUrl: './team-members.html',
  styleUrl: './team-members.css',
})
export class TeamMembers {
  members: TeamMember[] = [
    {
      id: 1,
      name: 'Dhruvi Sapovadiya',
      email: 'dhruvi@taskflow.com',
      role: 'Frontend Developer',
      status: 'Online',
      tasks: 18,
      completed: 14,
      performance: 88,
      avatar: 'D'
    },
    {
      id: 2,
      name: 'Umiya Rathod',
      email: 'umiya10@taskflow.com',
      role: 'Fullstack Developer',
      status: 'Away',
      tasks: 12,
      completed: 9,
      performance: 90,
      avatar: 'U'
    },
    {
      id: 3,
      name: 'Keval Jobanputra',
      email: 'keval@taskflow.com',
      role: 'Senior Frontend Developer',
      status: 'Offline',
      tasks: 25,
      completed: 14,
      performance: 70,
      avatar: 'K'
    },
    {
      id: 4,
      name: 'Smit Bhatti',
      email: 'smit@taskflow.com',
      role: 'Backend Developer',
      status: 'Online',
      tasks: 20,
      completed: 11,
      performance: 89,
      avatar: 'S'
    },
    {
      id: 5,
      name: 'Vivek Patel',
      email: 'vivek@taskflow.com',
      role: 'Backend Developer',
      status: 'Online',
      tasks: 30,
      completed: 14,
      performance: 50,
      avatar: 'V'
    },
  ]
}
