import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '/src/environments';
import { ErrorService } from './tools/error.service';
import { ValidatorService } from './tools/validator.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface Member {
  id: string;
  name: string;
  membershipNumber: number;
  active: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(
    private errorService: ErrorService,
    private http: HttpClient,
    private validatorService: ValidatorService,
  ) {}
  private members: Member[] = [];
  private membersSubject = new BehaviorSubject<Member[]>(this.members);


  public validateMembers(data: any, editar: boolean){
    console.log("Validando alumno... ", data);
    let error: any = [];

    if(!this.validatorService.required(data["member.id"])){
      error["member.id"] = this.errorService.required;
    }

    
    if(!this.validatorService.required(data["member.name"])){
      error["member.name"] = this.errorService.required;
    }

    
    if(!this.validatorService.required(data["member.membershipNumber"])){
      error["member.membershipNumber"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["member.active"])){
      error["member.active"] = this.errorService.required;
    }
  }

  public GetMembers (): Observable <any>{
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '});
    return this.http.get<any>(`${environment.url_api}/list-members/`, {headers:headers});
  }

  public DeleteMembers(idUser: number): Observable <any>{
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '});
    return this.http.delete<any>(`${environment.url_api}/members-edit/?id=${idUser}`,{headers:headers});
  }

  public AddMember (data: any): Observable <any>{
    return this.http.post<any>(`${environment.url_api}/members/`,data, httpOptions);
  }
}
