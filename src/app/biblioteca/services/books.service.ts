import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './tools/error.service';
import { ValidatorService } from './tools/validator.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
  constructor(
    private errorService: ErrorService,
    private http: HttpClient,
    private validatorService: ValidatorService,

  ) {
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

  public validateBooks(data: any, editar: boolean){
    console.log("Validando alumno... ", data);
    let error: any = [];

    if(!this.validatorService.required(data["book.isbn"])){
      error["book.isbn"] = this.errorService.required;
    }

    
    if(!this.validatorService.required(data["book.titulo"])){
      error["book.titulo"] = this.errorService.required;
    }

    
    if(!this.validatorService.required(data["book.nombre"])){
      error["book.nombre"] = this.errorService.required;
    }
  }


  public DeleteBooks(idUser: number): Observable <any>{
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '});
    return this.http.delete<any>(`${environment.url_api}/books-edit/?id=${idUser}`,{headers:headers});
  }

  public AddBook (data: any): Observable <any>{
    return this.http.post<any>(`${environment.url_api}/books/`,data, httpOptions);
  }

  public GetBooks (): Observable <any>{
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '});
    return this.http.get<any>(`${environment.url_api}/list-books/`, {headers:headers});
  }

  public AddCategory (data: any): Observable <any>{
    return this.http.post<any>(`${environment.url_api}/category/`,data, httpOptions);
  }

}
