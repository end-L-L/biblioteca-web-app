import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

// ApiService
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-settings',
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
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit{

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
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

  //variables
  public errors:any={};
  public prestamoConfig:any={};
  public retrasoConfig:any={};
  public extravioConfig:any={};
  public defaultConfig:any={};

  public valor:number = 10;

  public configPrestamo(){
    this.apiService.setConfiguration(this.prestamoConfig).subscribe({
      next: (response: any) => {
        this.prestamoConfig = response;
        console.log(response);
        alert('Configuración Guardada');
        this.loadData();
      },
      error: (error) => {
        console.log(error);
        alert('Error al guardar la configuración');
      }
    })
  }

  public configRetraso(){
    console.log(this.retrasoConfig);
    this.apiService.setConfiguration(this.retrasoConfig).subscribe({
      next: (response: any) => {
        this.retrasoConfig = response;
        console.log(response);
        alert('Configuración Guardada');
        this.loadData();
      },
      error: (error) => {
        console.log(error);
        alert('Error al guardar la configuración');
      }
    })
  }

  public configExtravio(){
    this.apiService.setConfiguration(this.extravioConfig).subscribe({
      next: (response: any) => {
        this.extravioConfig = response;
        console.log(response);
        alert('Configuración Guardada');
        this.loadData();
      },
      error: (error) => {
        console.log(error);
        alert('Error al guardar la configuración');
      }
    })
  }

  // Método para cargar los datos actualizados
private loadData() {
  this.apiService.getConfiguration().subscribe({
    next: (data: any) => {
      this.defaultConfig = data; // Actualiza los datos de la configuración en la vista
    },
    error: (error) => {
      console.log(error);
    }
  });
}

}