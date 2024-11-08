import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  constructor() {}
  private loans: Loan[] = [];
  private loansSubject = new BehaviorSubject<Loan[]>(this.loans);

  getLoans() {
    return this.loansSubject.asObservable();
  }

  addLoan(loan: Loan) {
    this.loans.push(loan);
    this.loansSubject.next(this.loans);
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

  removeLoan(memberId: string, bookTitle: string) {
    this.loans = this.loans.filter(
      (loan) => loan.memberId !== memberId || loan.bookTitle !== bookTitle
    );
    this.loansSubject.next(this.loans);
  }
}
