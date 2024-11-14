import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root',
})
export class LoansService {
  
  constructor(
    private http: HttpClient
  ) { }

  public setPrestamo(data: any){
    return this.http.post<any>('http://localhost:8000/api/v1/prestamos',data, httpOptions);
  }

  public validarPrestamo(data: any){
    return this.http.post<any>('http://localhost:8000/api/v1/devoluciones-response',data, httpOptions);
  }

  public devolverLibro(data: any){
    return this.http.post<any>('http://localhost:8000/api/v1/devoluciones',data, httpOptions);
  }

  public getPrestamos(){
    return this.http.get<any>('http://localhost:8000/api/v1/lista-prestamos', httpOptions);
  }
}
