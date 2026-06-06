import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface CalendarDay {
  date: number;
  day: string;
  isToday: boolean;
  events: string[];
}

interface UpcomingEvent {
  title: string;
  project: string;
  date: string;
  time: string;
  type: 'Deadline' | 'Meeting' | 'Sprint' | 'Review';
}

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-view.html',
  styleUrl: './calendar-view.css'
})
export class CalendarView {
  monthName = 'June 2026';

  days: CalendarDay[] = [
    { date: 1, day: 'Mon', isToday: false, events: [] },
    { date: 2, day: 'Tue', isToday: false, events: ['Review'] },
    { date: 3, day: 'Wed', isToday: false, events: [] },
    { date: 4, day: 'Thu', isToday: false, events: ['Sprint'] },
    { date: 5, day: 'Fri', isToday: false, events: [] },
    { date: 6, day: 'Sat', isToday: true, events: ['Meeting', 'Task Due'] },
    { date: 7, day: 'Sun', isToday: false, events: [] }
  ];

  upcomingEvents: UpcomingEvent[] = [
    {
      title: 'Kanban board testing',
      project: 'TaskFlow Web App',
      date: '06 Jun',
      time: '10:30 AM',
      type: 'Meeting'
    },
    {
      title: 'API integration deadline',
      project: 'Backend API Team',
      date: '08 Jun',
      time: '06:00 PM',
      type: 'Deadline'
    }
  ];
}