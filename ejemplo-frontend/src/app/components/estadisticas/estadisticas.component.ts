import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ZonaEstadistica {
  nombre: string;
  pacientes: number;
  porcentaje: number;
}

interface PatologiaEstadistica {
  nombre: string;
  pacientes: number;
  porcentaje: number;
  clase: string;
}

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.html',
  styleUrl: './estadisticas.scss'
})
export class EstadisticasComponent {

  totalPacientes = 458;

  pacientesActivos = 431;
  pacientesInactivos = 27;

  porcentajeActivos = 94;
  porcentajeInactivos = 6;

  zonas: ZonaEstadistica[] = [
    {
      nombre: 'Zona Norte',
      pacientes: 142,
      porcentaje: 31
    },
    {
      nombre: 'Zona Centro',
      pacientes: 128,
      porcentaje: 28
    },
    {
      nombre: 'Zona Sur',
      pacientes: 109,
      porcentaje: 24
    },
    {
      nombre: 'Zona Oeste',
      pacientes: 79,
      porcentaje: 17
    }
  ];

  patologias: PatologiaEstadistica[] = [
    {
      nombre: 'HTA',
      pacientes: 184,
      porcentaje: 40,
      clase: 'hta'
    },
    {
      nombre: 'DBT',
      pacientes: 96,
      porcentaje: 21,
      clase: 'dbt'
    },
    {
      nombre: 'HTA + DBT',
      pacientes: 73,
      porcentaje: 16,
      clase: 'combined'
    },
    {
      nombre: 'Otras',
      pacientes: 105,
      porcentaje: 23,
      clase: 'other'
    }
  ];

  gruposEdad = [
    {
      nombre: '18 - 39 años',
      pacientes: 64,
      porcentaje: 14
    },
    {
      nombre: '40 - 59 años',
      pacientes: 177,
      porcentaje: 39
    },
    {
      nombre: '60 - 74 años',
      pacientes: 151,
      porcentaje: 33
    },
    {
      nombre: '75 años o más',
      pacientes: 66,
      porcentaje: 14
    }
  ];

  zonaSeleccionada = 'Todas las zonas';

  cambiarZona(zona: string): void {
    this.zonaSeleccionada = zona;
  }
}