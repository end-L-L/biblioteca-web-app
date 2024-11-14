import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

// Api Service
import { MembersService } from '../../services/members.service';


@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
})
export class MembersComponent implements OnInit {
  
  constructor(
    private membersService: MembersService
  ) {}

  ngOnInit() {
    this.obtenerMiembros();
  }

  miembros: any [] = [];
  
  displayedColumns: string[] = ['id', 'matricula', 'first_name', 'last_name', 'is_active'];
  
  dataSource = new MatTableDataSource<DatosMiembro>(this.miembros as DatosMiembro[]);

  obtenerMiembros() {
    this.membersService.obtenerMiembros().subscribe({
      next: (response) => {
        console.log(response);
        this.miembros = response;
        //this.dataSource.data = response;
        this.dataSource = new MatTableDataSource<DatosMiembro>(this.miembros as DatosMiembro[]);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}

export interface DatosMiembro {
  id: number;
  matricula: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
}