import { Component } from '@angular/core';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-return-book',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule
  ],
  templateUrl: './return-book.component.html',
  styleUrl: './return-book.component.scss'
})
export class ReturnBookComponent {
  
  //variables
  public datosLibro: any={};
  public errors:any={};
  public saldo = 0;

  //array estado
  public estado:any[]= [
    {value: '1', nombre: 'Excelente'},
    {value: '2', nombre: 'Bueno'},
    {value: '3', nombre: 'Malo'},
    {value: '4', nombre: 'Deteriorado'},
    {value: '5', nombre: 'Extravíado'},
  ];

  ngOnInit()
  {

  }

  //functions

  public validarPrestamo(){
    //Validación
    this.errors = [];
    console.log(this.datosLibro);
    this.saldo = 100;
  }
  
  public regresarLibro(){
    //Validación
    this.errors = [];
    console.log(this.datosLibro);
  }
}
