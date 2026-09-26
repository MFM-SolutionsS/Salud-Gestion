import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface PacienteInforme {
  id: number;
  nombre: string;
  edad: number;
  zona: string;
  clasificacion: string;
  ultimoControl: string;
}

type TipoInforme =
  | 'general'
  | 'hta'
  | 'dbt'
  | 'zonas'
  | 'controles';

@Component({
  selector: 'app-informes',
  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './informes.html',
  styleUrl: './informes.scss'
})
export class InformesComponent {

  tipoInforme: TipoInforme = 'general';

  zonaSeleccionada = 'Todas las zonas';

  fechaDesde = '';

  fechaHasta = '';

  informeGenerado = false;


  zonas = [
    'Todas las zonas',
    'Zona Norte',
    'Zona Centro',
    'Zona Sur',
    'Zona Oeste'
  ];


  tiposInforme = [
    {
      value: 'general' as TipoInforme,
      nombre: 'Resumen general',
      descripcion: 'Situación general de los pacientes',
      icono: 'dashboard'
    },
    {
      value: 'hta' as TipoInforme,
      nombre: 'Hipertensión arterial',
      descripcion: 'Pacientes registrados con HTA',
      icono: 'favorite'
    },
    {
      value: 'dbt' as TipoInforme,
      nombre: 'Diabetes',
      descripcion: 'Pacientes registrados con DBT',
      icono: 'bloodtype'
    },
    {
      value: 'zonas' as TipoInforme,
      nombre: 'Pacientes por zona',
      descripcion: 'Distribución territorial',
      icono: 'location_on'
    },
    {
      value: 'controles' as TipoInforme,
      nombre: 'Controles pendientes',
      descripcion: 'Pacientes sin control reciente',
      icono: 'event_busy'
    }
  ];


  pacienteHTA: PacienteInforme[] = [
    {
      id: 2,
      nombre: 'María López',
      edad: 64,
      zona: 'Zona Centro',
      clasificacion: 'Registrada',
      ultimoControl: '10/09/2026'
    },
    {
      id: 4,
      nombre: 'Ana Ramírez',
      edad: 52,
      zona: 'Zona Norte',
      clasificacion: 'Registrada',
      ultimoControl: '12/09/2026'
    },
    {
      id: 1,
      nombre: 'Juan Pérez',
      edad: 58,
      zona: 'Zona Norte',
      clasificacion: 'Registrada',
      ultimoControl: '15/09/2026'
    }
  ];


  pacienteDBT: PacienteInforme[] = [
    {
      id: 3,
      nombre: 'Pedro Gómez',
      edad: 71,
      zona: 'Zona Sur',
      clasificacion: 'Tipo 2',
      ultimoControl: '18/09/2026'
    },
    {
      id: 1,
      nombre: 'Juan Pérez',
      edad: 58,
      zona: 'Zona Norte',
      clasificacion: 'Tipo 2',
      ultimoControl: '15/09/2026'
    }
  ];


  constructor(
    private router: Router
  ) {}


  seleccionarTipo(tipo: TipoInforme): void {
    this.tipoInforme = tipo;
    this.informeGenerado = false;
  }


  generarInforme(): void {
    this.informeGenerado = true;

    console.log('Informe generado', {
      tipo: this.tipoInforme,
      zona: this.zonaSeleccionada,
      desde: this.fechaDesde,
      hasta: this.fechaHasta
    });
  }


  limpiar(): void {
    this.tipoInforme = 'general';
    this.zonaSeleccionada = 'Todas las zonas';
    this.fechaDesde = '';
    this.fechaHasta = '';
    this.informeGenerado = false;
  }


  verPaciente(id: number): void {
    this.router.navigate(['/pacientes', id]);
  }


  get tituloInforme(): string {

    switch (this.tipoInforme) {

      case 'hta':
        return 'Hipertensión arterial (HTA)';

      case 'dbt':
        return 'Diabetes (DBT)';

      case 'zonas':
        return 'Pacientes por zona';

      case 'controles':
        return 'Controles pendientes';

      default:
        return 'Resumen general';
    }
  }


  get descripcionInforme(): string {

    switch (this.tipoInforme) {

      case 'hta':
        return 'Detalle de pacientes registrados con hipertensión arterial';

      case 'dbt':
        return 'Detalle de pacientes registrados con diabetes';

      case 'zonas':
        return 'Distribución de pacientes según zona sanitaria';

      case 'controles':
        return 'Pacientes que requieren seguimiento';

      default:
        return 'Resumen general de la situación de los pacientes';
    }
  }

}