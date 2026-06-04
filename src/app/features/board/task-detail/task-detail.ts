import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


interface Comment {
  user: string;
  text: string;
  time: string;
}

interface Activity {
  icon: string;
  text: string;
  time: string;
}

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {

  newComment = '';
  task = {
    title: 'Create Kanban Board UI',
    description: 'Design and develop a premium Jira stle board with drag and drop cards, priority badges, assoginee avatar and due date .',
    status: 'In Progress',
    priority: 'High',
    assignee: 'Dhruvi Sapovadiya',
    dueDate: '24 Jun 2026',
    project: 'TaskFlow Web App',
    label: 'Angular CDK'
  };

  comments: Comment[] = [
    {
      user: 'Dhruvi',
      text: 'Board Layout completed.Now working on card interactions.',
      time: '10 min ago'
    },
    {
      user: 'Umiya',
      text: 'Grate. Please make sure mobile responsive layout is proper,',
      time: '30 min ago'
    }
  ];

  activities: Activity[] = [{
    icon: 'bi-arrow-left-right',
    text: 'Task moved from Todo to In Progress',
    time: 'Today'
  },
  {
    icon: 'bi-person-check',
    text: 'Assigned to Dhruvi',
    time: 'Yesterday'

  },
  {
    icon: 'bi-plus-circle',
    text: 'Task created in TaskFlow Web App',
    time: '2 days ago'
  }
  ];

  addComment(){
    if(!this.newComment.trim()){
      return;
    }

    this.comments.unshift({
      user:'Dhruvi',
      text:'this.newComment',
      time:'Just now'
    });

    this.newComment='';
  }
}
