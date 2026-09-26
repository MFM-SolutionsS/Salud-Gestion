import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    BaseChartDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  pacientes = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      enfermedad: ['HTA'],
      zona: 'Zona Norte'
    },
    {
      id: 2,
      nombre: 'Ana Gómez',
      enfermedad: ['DBT'],
      zona: 'Zona Centro'
    },
    {
      id: 3,
      nombre: 'Carlos Ruiz',
      enfermedad: ['HTA', 'DBT'],
      zona: 'Zona Sur'
    },
    {
      id: 4,
      nombre: 'Laura Fernández',
      enfermedad: ['HTA'],
      zona: 'Zona Norte'
    },
    {
      id: 5,
      nombre: 'Miguel Rodríguez',
      enfermedad: ['DBT'],
      zona: 'Zona Centro'
    },
    {
      id: 6,
      nombre: 'Sofía Martínez',
      enfermedad: ['Obesidad'],
      zona: 'Zona Sur'
    }
  ];

  zonas = [
    {
      nombre: 'Zona Norte',
      pacientes: 152
    },
    {
      nombre: 'Zona Centro',
      pacientes: 126
    },
    {
      nombre: 'Zona Sur',
      pacientes: 104
    },
    {
      nombre: 'Zona Oeste',
      pacientes: 76
    }
  ];

  actividadReciente = [
    {
      fecha: '22/09/2026',
      descripcion: 'Nuevo control registrado',
      tipo: 'control'
    },
    {
      fecha: '21/09/2026',
      descripcion: 'Paciente actualizado',
      tipo: 'paciente'
    },
    {
      fecha: '20/09/2026',
      descripcion: 'Informe mensual generado',
      tipo: 'informe'
    },
    {
      fecha: '19/09/2026',
      descripcion: 'Nuevo paciente registrado',
      tipo: 'paciente'
    }
  ];

  totalPacientes = 458;
  hta = 128;
  dbt = 74;
  htaDbt = 31;

  controlesMes = 86;
  nuevosPacientes = 24;
  pendientes = 12;

  chartData = {
    labels: [
      'Hipertensión',
      'Diabetes',
      'HTA + DBT',
      'Otras'
    ],
    datasets: [
      {
        data: [
          this.hta,
          this.dbt,
          this.htaDbt,
          225
        ],
        backgroundColor: [
          '#247ba0',
          '#4caf50',
          '#e45756',
          '#f2c14e'
        ],
        borderWidth: 0
      }
    ]
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    }
  };

  get porcentajeHta(): number {
    return Math.round((this.hta / this.totalPacientes) * 100);
  }

  get porcentajeDbt(): number {
    return Math.round((this.dbt / this.totalPacientes) * 100);
  }

  get porcentajeHtaDbt(): number {
    return Math.round((this.htaDbt / this.totalPacientes) * 100);
  }

  get porcentajeZonaMaxima(): number {
    return Math.max(...this.zonas.map(z => z.pacientes));
  }
}