import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login').then(m => m.Login)
    },
    {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register').then(m => m.Register)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'workspaces',
        loadComponent: () => import('./features/workspace/workspace-list/workspace-list').then(m => m.WorkspaceList)
    },
    {
        path: 'projects',
        loadComponent: () => import('./features/projects/project-list/project-list').then(m => m.ProjectList)
    },
    {
        path: 'board/:id',
        loadComponent: () => import('./features/board/board-page/board-page').then(m => m.BoardPage)
    },
    {
        path: '**',
        redirectTo: 'notfound'
    }

];
