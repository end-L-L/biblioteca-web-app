import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export default [
    {
        path: '',
        //loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        component: DashboardComponent,

        children: [
            {
                path: 'books',
                loadComponent: () => import('./pages/view-books/view-books.component').then(m => m.ViewBooksComponent)
            },
            {
                path: 'manage',
                loadComponent: () => import('./pages/manage/manage.component').then(m => m.ManageComponent)
            },
            {
                path: 'return',
                loadComponent: () => import('./pages/return-book/return-book.component').then(m => m.ReturnBookComponent)
            },
            {
                path: 'members',
                loadComponent: () => import('./pages/members/members.component').then(m => m.MembersComponent)
            },
            {
                path: 'loans',
                loadComponent: () => import('./pages/loans/loans.component').then(m => m.LoansComponent)
            },
            {
                path: 'settings',
                loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent)
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }

] as Routes;