import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-ficha-paciente',
  standalone: true,
  imports: [],
  templateUrl: './ficha-paciente.html',
  styleUrls: ['./ficha-paciente.scss']
})
export class FichaPacienteComponent {

  paciente: Paciente = {
    id: 1,
    nombre: 'Juan Pérez',
    dni: '28.456.789',
    edad: 58,
    zona: 'Zona Norte',
    enfermedades: ['HTA', 'DBT'],
    ultimoControl: '15/09/2026',
    activo: true
  };

  constructor(
    private router: Router
  ) {}

  volver(): void {
    this.router.navigate(['/pacientes']);
  }

  editarPaciente(): void {
    console.log('Editar paciente:', this.paciente);
  }

  nuevoControl(): void {
    console.log('Nuevo control');
  }
}