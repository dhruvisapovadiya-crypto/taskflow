import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

interface Task {
  id: number;
  title: string;
  desc: string;
  priority: 'High' | 'Medium' | 'Low';
  assignee: string;
  due: string;
  tag: string;
}

interface BoardColumn {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}

@Component({
  selector: 'app-board-page',
  standalone: true,
  imports: [CommonModule, DragDropModule, RouterLink],
  templateUrl: './board-page.html',
  styleUrl: './board-page.css'
})
export class BoardPage {
  userName = localStorage.getItem('userName') || 'Dhruvi';

  selectedTask: Task | null = null;

  columns: BoardColumn[] = [
    {
      id: 'todo',
      title: 'Todo',
      color: 'blue',
      tasks: [
        {
          id: 1,
          title: 'Create workspace UI',
          desc: 'Design premium workspace cards and layout.',
          priority: 'High',
          assignee: 'D',
          due: 'Today',
          tag: 'Angular'
        },
        {
          id: 2,
          title: 'Setup project routing',
          desc: 'Connect dashboard, projects and board pages.',
          priority: 'Medium',
          assignee: 'A',
          due: 'Tomorrow',
          tag: 'Routing'
        }
      ]
    },
    {
      id: 'progress',
      title: 'In Progress',
      color: 'purple',
      tasks: [
        {
          id: 3,
          title: 'Build Kanban board',
          desc: 'Add drag and drop cards with Angular CDK.',
          priority: 'High',
          assignee: 'D',
          due: 'Friday',
          tag: 'CDK'
        }
      ]
    },
    {
      id: 'review',
      title: 'Review',
      color: 'yellow',
      tasks: [
        {
          id: 4,
          title: 'Check responsive UI',
          desc: 'Test dashboard and board on mobile screen.',
          priority: 'Medium',
          assignee: 'S',
          due: 'Next week',
          tag: 'UI'
        }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      color: 'green',
      tasks: [
        {
          id: 5,
          title: 'Login page completed',
          desc: 'Premium auth screen with validations.',
          priority: 'Low',
          assignee: 'D',
          due: 'Done',
          tag: 'Auth'
        }
      ]
    }
  ];

  get connectedDropLists(): string[] {
    return this.columns.map(column => column.id);
  }

  openTask(task: Task) {
    this.selectedTask = task;
  }

  closeTask() {
    this.selectedTask = null;
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}