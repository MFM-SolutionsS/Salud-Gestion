import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


interface Paciente {
  id: number;
  nombre: string;
  dni: string;
  edad: number;
  zona: string;
  enfermedades: string[];
  ultimoControl: string;
  activo: boolean;
}

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './pacientes.html',
  styleUrls: ['./pacientes.scss']
})


export class PacientesComponent {
  totalPacientes = 458;

  pacientes: Paciente[] = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      dni: '28.456.789',
      edad: 58,
      zona: 'Zona Norte',
      enfermedades: ['HTA', 'DBT'],
      ultimoControl: '15/09/2026',
      activo: true
    },
    {
      id: 2,
      nombre: 'María López',
      dni: '31.789.456',
      edad: 64,
      zona: 'Zona Centro',
      enfermedades: ['HTA'],
      ultimoControl: '10/09/2026',
      activo: true
    },
    {
      id: 3,
      nombre: 'Pedro Gómez',
      dni: '25.123.789',
      edad: 71,
      zona: 'Zona Sur',
      enfermedades: ['DBT'],
      ultimoControl: '18/09/2026',
      activo: true
    },
    {
      id: 4,
      nombre: 'Ana Ramírez',
      dni: '34.567.890',
      edad: 52,
      zona: 'Zona Norte',
      enfermedades: ['HTA'],
      ultimoControl: '12/09/2026',
      activo: true
    },
    {
      id: 5,
      nombre: 'Roberto Fernández',
      dni: '27.345.678',
      edad: 67,
      zona: 'Zona Centro',
      enfermedades: ['HTA', 'DBT'],
      ultimoControl: '05/09/2026',
      activo: true
    },
    {
      id: 6,
      nombre: 'Laura Martínez',
      dni: '36.789.123',
      edad: 45,
      zona: 'Zona Sur',
      enfermedades: ['Obesidad'],
      ultimoControl: '20/09/2026',
      activo: true
    },
    {
      id: 7,
      nombre: 'Carlos Rodríguez',
      dni: '29.876.543',
      edad: 61,
      zona: 'Zona Oeste',
      enfermedades: ['HTA'],
      ultimoControl: '08/09/2026',
      activo: true
    },
    {
      id: 8,
      nombre: 'Sofía Martínez',
      dni: '38.456.789',
      edad: 49,
      zona: 'Zona Norte',
      enfermedades: ['DBT'],
      ultimoControl: '19/09/2026',
      activo: true
    }
  ];


  // ================================
  // FILTROS
  // ================================

  busqueda = '';

  zonaSeleccionada = '';

  patologiaSeleccionada = '';

  estadoSeleccionado = '';


  // Lista que realmente mostramos
  pacientesFiltrados: Paciente[] = [...this.pacientes];

constructor(
  private router: Router
) {}
  // ================================
  // APLICAR FILTROS
  // ================================

  aplicarFiltros(): void {

    const texto = this.busqueda
      .trim()
      .toLowerCase();


    this.pacientesFiltrados = this.pacientes.filter(paciente => {

      // ----------------------------
      // BUSQUEDA
      // ----------------------------

      const coincideBusqueda =
        !texto ||
        paciente.nombre.toLowerCase().includes(texto) ||
        paciente.dni.toLowerCase().includes(texto) ||
        paciente.zona.toLowerCase().includes(texto);


      // ----------------------------
      // ZONA
      // ----------------------------

      const coincideZona =
        !this.zonaSeleccionada ||
        paciente.zona === this.zonaSeleccionada;


      // ----------------------------
      // PATOLOGÍA
      // ----------------------------

      let coincidePatologia = true;

      if (this.patologiaSeleccionada) {

        if (this.patologiaSeleccionada === 'HTA + DBT') {

          coincidePatologia =
            paciente.enfermedades.includes('HTA') &&
            paciente.enfermedades.includes('DBT');

        } else if (this.patologiaSeleccionada === 'Otras') {

          coincidePatologia =
            !paciente.enfermedades.includes('HTA') &&
            !paciente.enfermedades.includes('DBT');

        } else {

          coincidePatologia =
            paciente.enfermedades.includes(
              this.patologiaSeleccionada
            );

        }

      }


      // ----------------------------
      // ESTADO
      // ----------------------------

      let coincideEstado = true;

      if (this.estadoSeleccionado === 'Activo') {

        coincideEstado = paciente.activo === true;

      } else if (this.estadoSeleccionado === 'Inactivo') {

        coincideEstado = paciente.activo === false;

      }


      // ----------------------------
      // RESULTADO
      // ----------------------------

      return (
        coincideBusqueda &&
        coincideZona &&
        coincidePatologia &&
        coincideEstado
      );

    });

  }


  // ================================
  // LIMPIAR FILTROS
  // ================================

  limpiarFiltros(): void {

    this.busqueda = '';
    this.zonaSeleccionada = '';
    this.patologiaSeleccionada = '';
    this.estadoSeleccionado = '';

    this.pacientesFiltrados = [...this.pacientes];

  }


  // ================================
  // ACCIONES
  // ================================

 verFicha(paciente: Paciente): void {

  this.router.navigate([
    '/pacientes',
    paciente.id
  ]);

}


  nuevoPaciente(): void {

    console.log('Nuevo paciente');

  }

}