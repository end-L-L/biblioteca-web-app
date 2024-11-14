import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getConfiguration(){
    return this.http.get<any>('http://localhost:8000/api/v1/app-settings');
  }

  public setConfiguration(data: any){
    return this.http.post<any>('http://localhost:8000/api/v1/app-settings',data, httpOptions);
  }
}
