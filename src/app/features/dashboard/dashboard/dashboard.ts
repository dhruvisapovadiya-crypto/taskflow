import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  userName = localStorage.getItem('userName') || 'Dhruvi';

  stats = [
    { title: 'Active Projects', value: '18', icon: 'bi-kanban', change: '+12%' },
    { title: 'Open Tasks', value: '124', icon: 'bi-list-check', change: '+8%' },
    { title: 'Team Members', value: '32', icon: 'bi-people', change: '+4' },
    { title: 'Completion Rate', value: '86%', icon: 'bi-graph-up-arrow', change: '+16%' }
  ];

  projects = [
    { name: 'TaskFlow Web App', team: 'Frontend Team', progress: 82, status: 'In Progress' },
    { name: 'Mobile Dashboard UI', team: 'Design Team', progress: 48, status: 'Review' },
    { name: 'API Integration', team: 'Backend Team', progress: 67, status: 'Testing' }
  ];

  tasks = [
    { title: 'Create Kanban Board UI', tag: 'Design', priority: 'High', time: 'Today' },
    { title: 'Connect Project API', tag: 'Backend', priority: 'Medium', time: 'Tomorrow' },
    { title: 'Add Drag & Drop Cards', tag: 'Angular', priority: 'High', time: 'Friday' }
  ];
}