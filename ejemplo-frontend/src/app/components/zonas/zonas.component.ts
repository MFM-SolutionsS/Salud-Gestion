import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Zona {
  nombre: string;
  pacientes: number;
  porcentaje: number;
  hta: number;
  dbt: number;
  htaDbt: number;
  otros: number;
  ultimoControl: string;
  color: string;
}

@Component({
  selector: 'app-zonas',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './zonas.html',
  styleUrl: './zonas.scss'
})
export class ZonasComponent {

  totalPacientes = 458;

  zonas: Zona[] = [
    {
      nombre: 'Zona Norte',
      pacientes: 142,
      porcentaje: 31,
      hta: 58,
      dbt: 31,
      htaDbt: 22,
      otros: 31,
      ultimoControl: '20/09/2026',
      color: '#247ba0'
    },
    {
      nombre: 'Zona Centro',
      pacientes: 126,
      porcentaje: 27,
      hta: 54,
      dbt: 28,
      htaDbt: 18,
      otros: 26,
      ultimoControl: '19/09/2026',
      color: '#3d9660'
    },
    {
      nombre: 'Zona Sur',
      pacientes: 108,
      porcentaje: 24,
      hta: 46,
      dbt: 25,
      htaDbt: 16,
      otros: 21,
      ultimoControl: '18/09/2026',
      color: '#79539c'
    },
    {
      nombre: 'Zona Oeste',
      pacientes: 82,
      porcentaje: 18,
      hta: 35,
      dbt: 17,
      htaDbt: 11,
      otros: 19,
      ultimoControl: '17/09/2026',
      color: '#c18a1c'
    }
  ];

  get zonaMayorCantidad(): Zona {
    return this.zonas.reduce((mayor, zona) =>
      zona.pacientes > mayor.pacientes ? zona : mayor
    );
  }

  get promedioPacientes(): number {
    return Math.round(this.totalPacientes / this.zonas.length);
  }
}