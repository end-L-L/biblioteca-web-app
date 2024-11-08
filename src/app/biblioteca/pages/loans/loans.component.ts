import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { LoansService } from '../../services/loans.service';
interface Loan {
  memberId: string;
  bookTitle: string;
  loanDate: Date;
  returnDate: Date | null;
  overdue: boolean;
}

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.scss',
})
export class LoansComponent implements OnInit {
  displayedColumns: string[] = [
    'memberId',
    'bookTitle',
    'loanDate',
    'returnDate',
    'overdue',
  ];
  dataSource = new MatTableDataSource<Loan>();

  constructor(private loansService: LoansService) {}

  ngOnInit() {
    this.loansService.getLoans().subscribe((loans) => {
      this.dataSource.data = loans;
    });
  }
}
