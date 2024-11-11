import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }

  public getEditoriales(){
    return this.http.get<any>('http://localhost:8000/api/v1/editoriales', httpOptions);
  }
  
  public getAreas(){
    return this.http.get<any>('http://localhost:8000/api/v1/areas', httpOptions);
  }
  
  public getCategorias(){
    return this.http.get<any>('http://localhost:8000/api/v1/categorias', httpOptions);
  }
  
  public getLibros(){
    return this.http.get<any>('http://localhost:8000/api/v1/libros', httpOptions);
  }
  
  public registrarLibro(data: any){
    return this.http.post<any>('http://localhost:8000/api/v1/libros', data, httpOptions);
  }

  public registrarEjemplar(data: any){
    return this.http.post<any>('http://localhost:8000/api/v1/ejemplares', data, httpOptions);
  }

  public registrarCategoria(data: any){
    return this.http.post<any>('http://localhost:8000/api/v1/categorias', data, httpOptions);
  }

  public registrarArea(data: any){
    return this.http.post<any>('http://localhost:8000/api/v1/areas', data, httpOptions);
  }

  public registrarEditorial(data: any){
    return this.http.post<any>('http://localhost:8000/api/v1/editoriales', data, httpOptions);
  }
}
