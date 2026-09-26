import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { ZonasComponent } from './components/zonas/zonas.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { InformesComponent } from './components/informes/informes.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pacientes', component: PacientesComponent },
  {
  path: 'pacientes/nuevo',
  loadComponent: () =>
    import('./components/formularios/paciente-form/paciente-form.component')
      .then(m => m.PacienteFormComponent)
},
  { path: 'pacientes/:id', loadComponent: () =>   import('./components/ficha-pacientes/ficha-paciente.component')  .then(m => m.FichaPacienteComponent)},
  { path: 'zonas', component: ZonasComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'informes', component: InformesComponent },
  { path: '**', redirectTo: 'dashboard' },
  
];