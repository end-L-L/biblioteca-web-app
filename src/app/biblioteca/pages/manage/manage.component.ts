import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-manage',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent implements OnInit {

  ngOnInit(): void {}

  //variables de petición
  public book: any = {};
  public errors:any={};

  // variables de control
  
  // variables de ejemplar
  public ejemplar_isbn: string = "";
  public ejemplar_ubicacion: string = "";
  public ejemplar_estado: string = "";

  public categoria: string = "";
  public area: string = "";
  public editorial: string = "";
  public miembro: any = {};

  // array áreas
  public areas:any[]= [
    {value: '1', nombre: 'Área 1'},
    {value: '2', nombre: 'Área 2'},
    {value: '3', nombre: 'Área 3'},
    {value: '4', nombre: 'Área 4'},
    {value: '5', nombre: 'Área 5'},
  ];

  //array categorías
  public categorias:any[]= [
    {value: '1', nombre: 'Categoría 1'},
    {value: '2', nombre: 'Categoría 2'},
    {value: '3', nombre: 'Categoría 3'},
    {value: '4', nombre: 'Categoría 4'},
    {value: '5', nombre: 'Categoría 5'},
  ];

  // array editoriales
  public editoriales:any[]= [
    {value: '1', nombre: 'Editorial 1'},
    {value: '2', nombre: 'Editorial 2'},
    {value: '3', nombre: 'Editorial 3'},
    {value: '4', nombre: 'Editorial 4'},
    {value: '5', nombre: 'Editorial 5'},
  ];

  // array tipo
  public tipo:any[]= [
    {value: '1', nombre: 'Donación'},
    {value: '2', nombre: 'Compra'}
  ];

  // array estado
  public estado:any[]= [
    {value: '1', nombre: 'Excelente'},
    {value: '2', nombre: 'Bueno'},
    {value: '3', nombre: 'Malo'},
    {value: '4', nombre: 'Deteriorado'}
  ];


  //functions


  public actualizar(){
    //Validación
    this.errors = [];
    console.log(this.book);
  }

  public addEjemplar(){
    console.log(this.ejemplar_isbn);
    console.log(this.ejemplar_ubicacion);
    console.log(this.ejemplar_estado);
  }

  public addCategoria(){
    console.log(this.categoria);
  }

  public addArea(){
    console.log(this.area);
  }

  public addEditorial(){
    console.log(this.editorial);
  }

  public addMiembro(){
    console.log(this.miembro);
  }
}
