import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    {
        path: 'login',
        loadComponent: () =>
            import('./features/auth/login/login').then(m => m.Login)
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./features/auth/register/register').then(m => m.Register)
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./features/dashboard/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'workspaces',
        loadComponent: () =>
            import('./features/workspace/workspace-list/workspace-list').then(m => m.WorkspaceList)
    },
    {
        path: 'workspace-details',
        loadComponent: () =>
            import('./features/workspace/workspace-details/workspace-details').then(m => m.WorkspaceDetails)
    },

    {
        path: 'calendar',
        loadComponent: () =>
            import('./features/calendar/calendar-view/calendar-view').then(m => m.CalendarView)
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./features/projects/project-list/project-list').then(m => m.ProjectList)
    },
    {
        path: 'board/:id',
        loadComponent: () =>
            import('./features/board/board-page/board-page').then(m => m.BoardPage)
    },
    {
        path: 'task-detail',
        loadComponent: () =>
            import('./features/board/task-detail/task-detail').then(m => m.TaskDetail)
    },
    {
        path: 'team',
        loadComponent: () =>
            import('./features/team/team-members/team-members').then(m => m.TeamMembers)
    },
    {
        path: 'invite-member',
        loadComponent: () =>
            import('./features/team/invite-member/invite-member').then(m => m.InviteMember)
    },
    {
        path: 'reports',
        loadComponent: () =>
            import('./features/reports/reports-dashboard/reports-dashboard')
                .then(m => m.ReportsDashboard)
    },
    {
        path: 'settings',
        loadComponent: () =>
            import('./features/settings/settings/settings')
                .then(m => m.Settings)
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];