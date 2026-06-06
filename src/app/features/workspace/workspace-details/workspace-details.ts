import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-workspace-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './workspace-details.html',
  styleUrl: './workspace-details.css',
})
export class WorkspaceDetails {
  workspace = {
    name: 'Frontend Team',
    description: 'Angular UI dashboard , board system and design work.',
    progress: 84,
    members: 12,
    projects: 8,
    tasks: 124
  };

  projects = [
    {
      id: 1,
      name: 'TaskFlow Web App',
      status: 'In Progress',
      progress: 82
    },
    {
      id: 2,
      name: 'Dashboard Re design',
      status: 'Review',
      progress: 74
    },
    {
      id: 3,
      name: 'Board UI System',
      status: 'Testing',
      progress: 67
    }
  ];

  members = [
    { name: 'Dhruvi', role: 'Frontend Developer', avatar: 'D' },
    { name: 'Umiya', role: 'Team Leader', avatar: 'U' },
    { name: 'Jash', role: 'UI designer', avatar: 'J' },
    { name: 'Om', role: 'Backend Developer', avatar: 'O' }
  ];

  activities=[
    'Dhruvi moved task to In Progress',
    'Umiya Created new sprint board',
    'Jash updated Dashboard UI',
    'Om Add a new coloumn in database '
  ];
}
