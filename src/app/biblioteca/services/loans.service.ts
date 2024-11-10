import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ErrorService } from './tools/error.service';
import { ValidatorService } from './tools/validator.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface Loan {
  memberId: string;
  bookTitle: string;
  loanDate: Date;
  returnDate: Date | null;
  overdue: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class LoansService {
  constructor(
    private errorService: ErrorService,
    private http: HttpClient,
    private validatorService: ValidatorService,
  ) {}
  private loans: Loan[] = [];
  private loansSubject = new BehaviorSubject<Loan[]>(this.loans);


  public validateBooks(data: any, editar: boolean){
    console.log("Validando alumno... ", data);
    let error: any = [];

    if(!this.validatorService.required(data["loan.memberI"])){
      error["loan.memberI"] = this.errorService.required;
    }

    
    if(!this.validatorService.required(data["loan.bookTitle"])){
      error["loan.bookTitle"] = this.errorService.required;
    }

    
    if(!this.validatorService.required(data["loan.loanDate"])){
      error["loan.loanDate"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["loan.returnDate"])){
      error["loan.returnDate"] = this.errorService.required;
    }

    if(!this.validatorService.required(data["loan.overdue"])){
      error["loan.overdue"] = this.errorService.required;
    }
  }


  public DeleteLoans(idUser: number): Observable <any>{
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '});
    return this.http.delete<any>(`${environment.url_api}/books-edit/?id=${idUser}`,{headers:headers});
  }

  public AddLoan (data: any): Observable <any>{
    return this.http.post<any>(`${environment.url_api}/books/`,data, httpOptions);
  }

  public GetLoans (): Observable <any>{
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '});
    return this.http.get<any>(`${environment.url_api}/list-books/`, {headers:headers});
  }

  returnLoan(memberId: string, bookTitle: string) {
    const loanIndex = this.loans.findIndex(
      (loan) => loan.memberId === memberId && loan.bookTitle === bookTitle
    );
    if (loanIndex > -1) {
      this.loans[loanIndex].returnDate = new Date();
      this.loansSubject.next(this.loans);
    }
  }
}
