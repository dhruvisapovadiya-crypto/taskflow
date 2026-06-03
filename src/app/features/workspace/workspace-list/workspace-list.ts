import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-workspace-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './workspace-list.html',
  styleUrl: './workspace-list.css',
})
export class WorkspaceList {
  userName = localStorage.getItem('userName') || 'Dhruvi';
  workspaces = [
    {
      id: 1,
      name: 'TaskFlow Product Team',
      desc: 'Main workspace for product planning and sprint tracking.',
      projects:8,
      progress:75,
      members:14,
      tag:'Product'
    },
    {
      id:2,
      name:'Frontend Squad ',
      desc:'Angular UI,Components and dashboard working properly ',
      projects:6,
      progress:89,
      members:10,
      tag:'Angular'
    },
    {
      id:3,
      name:'Backend API Team',
      desc:'.NET APIs , authentication ,database and deployment tasks',
      projects:6,
      members:9,
      progress:72,
      tag:'.NET'
    }
  ]
}
