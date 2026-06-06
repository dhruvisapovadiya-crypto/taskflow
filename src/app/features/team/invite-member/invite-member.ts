import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-invite-member',
  imports: [RouterLink, FormsModule],
  templateUrl: './invite-member.html',
  styleUrl: './invite-member.css',
})
export class InviteMember {
  isSending = false;
  successMessage = '';

  member = {
    name: '',
    email: '',
    role: '',
    workspace: '',
    message: ''
  };

  roles = ['Admin', 'Project Manager', 'Frontend Developer', 'Backend Developer', 'UI/Ux Designer', 'QA Tester'];
  workspaces = ['TaskFlow Product Team', 'Frontend Team', 'Backend API Team', 'Design Team'];


  constructor(private router:Router){}

  sendInvite(form:NgForm){
    if(form.invalid){
       form.control.markAllAsTouched();
       return;
    }

    this.isSending=true;

    setTimeout(()=>{
      this.isSending=false;
      this.successMessage='Invitation sent Successfully!!';

      setTimeout(()=>{
        this.router.navigate(['/team'])
      },900);
    },900);
  }
} 
