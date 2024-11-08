import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MATERIAL_MODULES,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  constructor(
    private router: Router
  ) {}

  options = [
    { name: 'Ver Libros', icon: '/client/src/assets/icons/view_books.png', link: '/library/books' },
    { name: 'Gestión', icon: 'assets/icons/management.png', link: '/library/manage' },
    { name: 'Retornar Libro', icon: 'assets/icons/return_book.png', link: '/library/return' },
    { name: 'Miembros', icon: 'assets/icons/members.png', link: '/library/members' },
    { name: 'Préstamos', icon: 'assets/icons/loans.png', link: '/library/loans' },
    { name: 'Ajustes', icon: 'assets/icons/settings.png', link: '/library/settings' }
  ];

  navigateTo(link: string) {
    this.router.navigate([link]);
  }

}
