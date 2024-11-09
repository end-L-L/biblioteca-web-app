import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

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
export class SettingsComponent {
  
  //variables
  public errors:any={};
  public dias_prestamo:number | undefined;
  public dias_retraso:number | undefined;
  public cuota_extravio:number | undefined;

  
  ngOnInit(){}

  //functions

  public diasPrestamo(){
    console.log('prestamo', this.dias_prestamo);
  }

  public diasRetraso(){
    console.log('retraso', this.dias_retraso);
  }

  public extravio(){
    console.log('extravio', this.cuota_extravio);
  }

}