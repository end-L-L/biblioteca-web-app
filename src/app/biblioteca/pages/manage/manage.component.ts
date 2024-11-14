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

// Api Service
import { BooksService } from '../../services/books.service';
import { MembersService } from '../../services/members.service';

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

  ngOnInit(): void {
    this.editorialesList();
    this.areasList();
    this.categoriasList();
  }

  constructor(
    private bookService: BooksService,
    private memberService: MembersService
  ) {}

  // variables de petición
  public book: any = {};
  public errors:any={};
  public ejemplar: any = {};
  public categoria: any = {};
  public area: any = {};
  public editorial: any = {};
  public miembro: any = {};

  // array áreas
  public areas:any[]= [];

  //array categorías
  public categorias:any[]= [];

  // array editoriales
  public editoriales:any[]= [];

  // array tipo
  public tipo:any[]= [
    {value: '1', nombre: 'Donación'},
    {value: '2', nombre: 'Compra'}
  ];

  // array estado
  public estado:any[]= [
    {value: '1', nombre: 'Excelente'},
    {value: '2', nombre: 'Bueno'},
    {value: '3', nombre: 'Deteriorado'}
  ];

  //functions

  // obtener editoriales
  public editorialesList(){
    this.bookService.getEditoriales().subscribe({
      next: (response: any) => {
        this.editoriales = response;
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  // obtener áreas
  public areasList(){
    this.bookService.getAreas().subscribe({
      next: (response: any) => {
        this.areas = response;
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  // obtener categorías
  public categoriasList(){
    this.bookService.getCategorias().subscribe({
      next: (response: any) => {
        this.categorias = response;
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  // registrar libro
  public registrarLibro(){
    console.log(this.book);
    this.bookService.registrarLibro(this.book).subscribe({
      next: (response: any) => {
        console.log(response);
        alert("Libro Registrado");
      },
      error: (error) => {
        console.log(error);
        this.errors = error.error;
        console.log(this.errors);
        
        alert("Error: " + this.errors.message);
      }
    })
  }

  // registrar ejemplar
  public registrarEjemplar(){
    console.log(this.ejemplar);
    this.bookService.registrarEjemplar(this.ejemplar).subscribe({
      next: (response: any) => {
        console.log(response);
        alert("Ejemplar Registrado");
      },
      error: (error) => {
        console.log(error);
        this.errors = error.error;
        console.log(this.errors);

        alert("Error: " + this.errors.message);
      }
    })
  }

  // registrar categoría
  public registrarCategoria(){
    console.log(this.categoria);
    this.bookService.registrarCategoria(this.categoria).subscribe({
      next: (response: any) => {
        console.log(response);
        alert("Categoría Registrada");
      },
      error: (error) => {
        console.log(error);
        this.errors = error.error;
        console.log(this.errors);

        alert("Error: " + this.errors.message);
      }
    })
  }

  // registrar área
  public registrarArea(){
    console.log(this.area);
    this.bookService.registrarArea(this.area).subscribe({
      next: (response: any) => {
        console.log(response);
        alert("Área Registrada");
      },
      error: (error) => {
        console.log(error);
        this.errors = error.error;
        console.log(this.errors);

        alert("Error: " + this.errors.message);
      }
    })
  }

  // registrar editorial
  public registrarEditorial(){
    console.log(this.editorial);
    this.bookService.registrarEditorial(this.editorial).subscribe({
      next: (response: any) => {
        console.log(response);
        alert("Editorial Registrada");
      },
      error: (error) => {
        console.log(error);
        this.errors = error.error;
        console.log(this.errors);

        alert("Error: " + this.errors.message);
      }
    })
  }

  // registrar miembro
  public registrarMiembro(){
    console.log(this.miembro);
    this.memberService.registrarMiembro(this.miembro).subscribe({
      next: (response: any) => {
        console.log(response);
        alert("Miembro Registrado");
      },
      error: (error) => {
        console.log(error);
        this.errors = error.error;
        console.log(this.errors);

        alert("Error: " + this.errors.message);
      }
    })
  }

  //Función para Detectar el Cambio de Fecha
  public changeFecha(event :any){
    this.book.fecha_de_publicacion = event.value.toISOString().split("T")[0];
  }
}
