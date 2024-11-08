import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Book {
  id: number; // ID del libro
  title: string;
  author: string;
  year: number;
  genre: string;
  condition: 'good' | 'bad'; // Estado del libro
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {
    this.books = [
      {
        id: 1,
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        genre: 'Dystopian',
        condition: 'good',
      },
      {
        id: 2,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        genre: 'Classic',
        condition: 'bad',
      },
      //libros de prueba
    ];
    this.booksSubject.next(this.books); // Inicializa el Subject con los libros de prueba
  }
  private books: Book[] = [];
  private booksSubject = new BehaviorSubject<Book[]>(this.books);

  getBooks() {
    return this.booksSubject.asObservable();
  }

  addBook(book: Book) {
    this.books.push(book);
    this.booksSubject.next(this.books);
  }

  removeBook(bookId: number) {
    this.books = this.books.filter((book) => book.id !== bookId);
    this.booksSubject.next(this.books);
  }
}
