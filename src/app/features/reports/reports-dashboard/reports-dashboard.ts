import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ReportStat {
  title: string;
  value: string;
  icon: string;
  note: string;
}

interface ProjectHealth {
  name: string;
  status: 'Healthy' | 'Warning' | 'At Risk';
  score: number;
  completed: number;
  pending: number;
}

interface Performer {
  name: string;
  role: string;
  score: number;
  tasks: number;
  avatar: string;
  rank: string;
}

interface Activity {
  icon: string;
  text: string;
  time: string;
}

@Component({
  selector: 'app-reports-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-dashboard.html',
  styleUrl: './reports-dashboard.css'
})
export class ReportsDashboard {
  stats: ReportStat[] = [
    {
      title: 'Total Projects',
      value: '24',
      icon: 'bi-folder2-open',
      note: '+12% from last month'
    },
    {
      title: 'Tasks Completed',
      value: '186',
      icon: 'bi-check2-circle',
      note: '+18% this sprint'
    },
    {
      title: 'Pending Tasks',
      value: '42',
      icon: 'bi-hourglass-split',
      note: '6 less than last week'
    },
    {
      title: 'Team Productivity',
      value: '89%',
      icon: 'bi-lightning-charge-fill',
      note: 'Excellent performance'
    }
  ];

  projectHealth: ProjectHealth[] = [
    {
      name: 'TaskFlow Web App',
      status: 'Healthy',
      score: 92,
      completed: 34,
      pending: 8
    },
    {
      name: 'Backend API System',
      status: 'Warning',
      score: 74,
      completed: 22,
      pending: 8
    },
    {
      name: 'Dashboard Redesign',
      status: 'At Risk',
      score: 58,
      completed: 15,
      pending: 11
    }
  ];

  performers: Performer[] = [
    {
      name: 'Dhruvi',
      role: 'Frontend Developer',
      score: 96,
      tasks: 28,
      avatar: 'D',
      rank: '01'
    },
    {
      name: 'Sagar',
      role: 'Team Lead',
      score: 91,
      tasks: 34,
      avatar: 'S',
      rank: '02'
    },
    {
      name: 'Aarav',
      role: 'UI Designer',
      score: 84,
      tasks: 21,
      avatar: 'A',
      rank: '03'
    }
  ];

  activities: Activity[] = [
    {
      icon: 'bi-check-circle-fill',
      text: 'Dhruvi completed Kanban board UI task',
      time: '10 min ago'
    },
    {
      icon: 'bi-arrow-left-right',
      text: 'Backend API task moved to Review',
      time: '32 min ago'
    },
    {
      icon: 'bi-person-plus-fill',
      text: 'New member invited to Frontend Team',
      time: '1 hour ago'
    },
    {
      icon: 'bi-flag-fill',
      text: 'Dashboard Redesign marked as At Risk',
      time: '2 hours ago'
    }
  ];
}