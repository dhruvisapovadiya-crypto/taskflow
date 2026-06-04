import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css',
})
export class ProjectList {
  userName = localStorage.getItem('userName') || 'Dhruvi';
  projects = [
    {
      id: 1,
      name: 'TaskFlow Web App',
      desc: 'Main project management platform with boards and task tracking',
      status: 'In Progress',
      priority: 'High',
      progress: 82,
      tasks: 38,
      members: 8,
      due: '24 Jun'
    },
    {
      id: 2,
      name: 'Client Portal',
      desc: 'Customer dashboard for tickets,reports and Communication.',
      status: 'Review',
      priority:'medium',
      progress: 90,
      tasks:21,
      members:30,
      due:'30 Jan'
    },
    {
      id:3,
      name:'API Gateway',
      desc:'.NET backend APIs,JWT authentication and database flow.',
      status:'Testing',
      priority:'High',
      progress:'79',
      tasks:29,
      member:6,
      due:'18 Jun'
    },
    {
      id:4,
      name:'Mobile UI Kit',
      desc:'Reusable design system and responsive componenet library.',
      status:'Planning',
      priority:'Low',
      progress:35,
      tasks:14,
      members:4,
      due:'05 July'
    }
  ]
}
