import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

// Api Service
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-view-books',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss'],
})
export class ViewBooksComponent implements OnInit {
  
  constructor(
    private booksService: BooksService
  ) {}

  ngOnInit() {
    this.obtenerLibros();
  }

  libros: any [] = [];
  
  displayedColumns: string[] = [
    'isbn',
    'titulo',
    'autor',
    'fecha_de_publicacion',
    'edicion'
  ];

  dataSource = new MatTableDataSource<DatosLibro>(this.libros as DatosLibro[]);

  public obtenerLibros(){
    this.booksService.getLibros().subscribe({
      next: (response: any) => {
        this.libros = response;
        console.log(response);
        this.dataSource = new MatTableDataSource<DatosLibro>(this.libros as DatosLibro[]);

      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}

export interface DatosLibro {
  isbn: string;
  titulo: string;
  autor: string;
  id_editorial: number;
  fecha_de_publicacion: string;
  edicion: string;
  id_categoria: number;
  id_area: number;
}