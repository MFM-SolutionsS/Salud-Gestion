import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, BaseChartDirective],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  pacientes = [
    { nombre: 'Juan Pérez', enfermedad: 'HTA' },
    { nombre: 'Ana Gómez', enfermedad: 'DBT' },
    { nombre: 'Carlos Ruiz', enfermedad: 'HTA + DBT' },
  ];

  zonas = ['Cardiología', 'Endocrinología', 'Emergencias'];

  chartData = {
    labels: ['HTA', 'DBT', 'HTA + DBT', 'Otros'],
    datasets: [
      {
        data: [10, 7, 5, 3],
        backgroundColor: ['#1976d2', '#388e3c', '#d32f2f', '#fbc02d']
      }
    ]
  };
}