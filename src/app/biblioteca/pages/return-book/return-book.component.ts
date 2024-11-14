import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';

// ApiService
import { ApiService } from '../../services/api.service';
import { LoansService } from '../../services/loans.service';

@Component({
  selector: 'app-return-book',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    DatePipe
  ],
  templateUrl: './return-book.component.html',
  styleUrl: './return-book.component.scss'
})
export class ReturnBookComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private loansService: LoansService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.minDate = new Date();
    
    this.apiService.getConfiguration().subscribe({
      next: (response: any) => {
        this.defaultConfig = response;
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  public errors: any = {};
  
  public datosPrestamo: any = {};
  public datosDevolucion: any = {};
  
  public saldoRetraso:number = 0;
  public saldoExtravio:number = 0;
  public defaultConfig: any = {};
  
  public minDate: Date | undefined;
  public fechaFin: Date | null = null;

  public estado: any[] = [
    { value: '1', nombre: 'Excelente' },
    { value: '2', nombre: 'Bueno' },
    { value: '3', nombre: 'Deteriorado' },
    { value: '4', nombre: 'Extravíado' },
  ];

  public rResponse:any = {};

  // función para registrar préstamo
  public registrarPrestamo() {
    console.log(this.datosPrestamo);

    this.loansService.setPrestamo(this.datosPrestamo).subscribe({
      next: (response: any) => {
        console.log(response);
        this.rResponse = response;
        console.log(this.rResponse);
        alert('Préstamo registrado correctamente');
      },
      error: (error) => {
        alert('Error: ' + error.error.error);
        console.log(error.error);
        this.rResponse = error.error.error;
      }
    })
  }

  public validarPrestamo() {

    console.log(this.datosDevolucion);

    this.loansService.validarPrestamo(this.datosDevolucion).subscribe({
      next: (response: any) => {
        console.log(response);
        alert('Préstamo validado correctamente');
        this.loadData(response);
        this.saldoRetraso = response.pagoRetraso;
        console.log(this.saldoRetraso);
        this.saldoExtravio = response.pagoExtravio;
        console.log(this.saldoExtravio);
      },
      error: (error) => {
        console.log('error', error);
        console.log('error error',error.error);
        alert('Error: ' + error.error.error);
      }
    })
  }

  public loadData(data:any){
    this.saldoRetraso = data.pagoRetraso;
    this.saldoExtravio = data.pagoExtravio;
    this.cdr.detectChanges();
  }

  public registrarDevolucion() {
    console.log(this.datosDevolucion);

    this.loansService.devolverLibro(this.datosDevolucion).subscribe({
      next: (response: any) => {
        console.log(response);
        alert('Devolución registrada correctamente');
      },
      error: (error) => {
        console.log('error', error);
        console.log('error error',error.error);
        alert('Error: ' + error.error.error);
      }
    })

  }

  // función para detectar el cambio de fecha
  public changeFecha(event: any) {
    this.datosPrestamo.fecha_inicio = event.value.toISOString().split("T")[0];

    const fechaInicio = event.value;
    if (fechaInicio) {
      this.fechaFin = new Date(fechaInicio);
      this.fechaFin.setDate(this.fechaFin.getDate() + this.defaultConfig.dias_prestamo);
      this.datosPrestamo.fecha_fin = this.fechaFin.toISOString().split("T")[0];
    }
  }
}
