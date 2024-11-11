import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  
  constructor(
    private http: HttpClient
  ) { }
  
  public registrarMiembro(data: any){
    return this.http.post<any>('http://localhost:8000/api/v1/create-member', data, httpOptions);
  }
}
