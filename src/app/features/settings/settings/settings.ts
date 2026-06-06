import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
  profile = {
    name: 'Dhruvi Sapovadiya',
    email: 'dhruvi@taskflow.com',
    role: 'Frontend Developer'
  };

  settings = {
    darkMode: false,
    emailNotification: true,
    taskReminder: true,
    twoFactor: false,
    autoAssign: true,
    weeklyReport: true
  };

  saveSettings() {
    alert('Settings saved successfully!');
  }
}