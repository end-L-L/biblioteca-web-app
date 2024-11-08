import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
  //variables
public book: any={};
public user: any={};
public token: string = "";
public errors:any={};

//array estados
public categorias:any[]= [
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


  public actualizar(){
    //Validación
    this.errors = [];
  }
}
