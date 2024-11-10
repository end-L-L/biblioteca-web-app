import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BooksService } from '../../services/books.service'; // Asegúrate de que la ruta sea correcta

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  condition: 'good' | 'bad';
}

@Component({
  selector: 'app-view-books',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss'],
})
export class ViewBooksComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'author',
    'year',
    'genre',
    'condition',
  ];
  dataSource = new MatTableDataSource<Book>();

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.GetBooks().subscribe((books) => {
      this.dataSource.data = books;
    });
  }

  removeBook(bookId: number) {
    this.booksService.DeleteBooks(bookId);
  }
}
