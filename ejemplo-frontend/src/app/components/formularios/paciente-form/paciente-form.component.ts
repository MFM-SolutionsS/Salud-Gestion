import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './paciente-form.html',
  styleUrl: './paciente-form.scss'
})
export class PacienteFormComponent {

  guardado = false;

  zonas = [
    'Zona Norte',
    'Zona Centro',
    'Zona Sur',
    'Zona Oeste'
  ];

  enfermedades = [
    'HTA',
    'DBT',
    'Obesidad',
    'Enfermedad cardiovascular',
    'Enfermedad renal',
    'Otras'
  ];

  pacienteForm;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    this.pacienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: [''],
      zona: ['', Validators.required],
      enfermedades: [<string[]>[], Validators.required],
      observaciones: ['']
    });

  }


  seleccionarEnfermedad(enfermedad: string): void {

    const seleccionadas =
      this.pacienteForm.controls.enfermedades.value ?? [];

    if (seleccionadas.includes(enfermedad)) {

      this.pacienteForm.controls.enfermedades.setValue(
        seleccionadas.filter(item => item !== enfermedad)
      );

    } else {

      this.pacienteForm.controls.enfermedades.setValue([
        ...seleccionadas,
        enfermedad
      ]);

    }

    this.pacienteForm.controls.enfermedades.markAsTouched();
  }


  enfermedadSeleccionada(enfermedad: string): boolean {

    return (
      this.pacienteForm.controls.enfermedades.value?.includes(enfermedad)
      ?? false
    );

  }


  guardarPaciente(): void {

    if (this.pacienteForm.invalid) {

      this.pacienteForm.markAllAsTouched();

      return;
    }

    console.log(
      'Paciente guardado:',
      this.pacienteForm.value
    );

    this.guardado = true;

    setTimeout(() => {

      this.router.navigate(['/pacientes']);

    }, 1200);

  }


  cancelar(): void {

    this.router.navigate(['/pacientes']);

  }

}