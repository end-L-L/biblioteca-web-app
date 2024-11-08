import { Component, OnInit } from '@angular/core';
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
export class DashboardComponent implements OnInit {
  
  ngOnInit(): void {
    //this.showDashboard = true;
  }

  constructor(
    private router: Router
  ) {}

  // page : string = "dashboard";

  showDashboard: boolean = true;
  
  switch(){
    if(this.router.url == '/library'){
      this.showDashboard = true;
    } else {
      this.showDashboard = !this.showDashboard;
    }
  }

  options = [
    { name: 'Ver Libros', icon: 'icons/view_books.png', link: '/library/books' },
    { name: 'Gestión de Biblioteca', icon: 'icons/manage_books.png', link: '/library/manage' },
    { name: 'Retornar Libro', icon: 'icons/return_books.png', link: '/library/return' },
    { name: 'Miembros', icon: 'icons/members_books.png', link: '/library/members' },
    { name: 'Préstamos', icon: 'icons/loans_books.png', link: '/library/loans' },
    { name: 'Ajustes', icon: 'icons/settings.png', link: '/library/settings' }
  ];

  navigateTo(link: string) {
    this.router.navigate([link]);
  }

}
