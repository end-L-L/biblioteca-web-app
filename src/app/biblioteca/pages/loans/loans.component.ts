import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LoansService } from '../../services/loans.service';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.scss',
})
export class LoansComponent implements OnInit {
  
  constructor(
    private loansService: LoansService
  ) {}

  ngOnInit() {
    this.obtenerPrestamos();
  }

  displayedColumns: string[] = [
    'id_miembro',
    'titulo_libro',
    'fecha_prestamo',
    'fecha_retorno',
    'vencido',
  ];
  
  lista_prestamos: any [] = [];
  
  dataSource = new MatTableDataSource<Loan>(this.lista_prestamos as Loan[]);

  public obtenerPrestamos() {
    this.loansService.getPrestamos().subscribe({
      next: (response) => {
        console.log(response);
        this.lista_prestamos = response;
        this.dataSource.data = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}

interface Loan {
  id_miembro: string;
  titulo_libro: string;
  fecha_prestamo: Date;
  fecha_retorno: Date | null;
  vencido: boolean;
}