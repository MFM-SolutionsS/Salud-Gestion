// 1_ Instalacion de dependencias

se mueven a:  cd ejemplo-frontend

y corren:

"npm install"

si todo esta correcto, para correr el servidor colocan: 

"ng serve"

// 2_ Dependencias iniciales del proyecto 

📦 Dependencias principales

@angular/core → Núcleo de Angular, necesario para cualquier aplicación.

@angular/common → Funciones y utilidades comunes (directivas básicas como ngIf, ngFor).

@angular/compiler → Motor que compila las plantillas HTML de Angular.

@angular/forms → Módulo para formularios reactivos y template-driven.

@angular/router → Manejo de rutas y navegación entre componentes.

@angular/platform-browser → Soporte para ejecutar Angular en navegadores.

@angular/platform-server → Soporte para renderizado en servidor (SSR).

@angular/cdk → Component Dev Kit, utilidades para construir componentes (overlay, accesibilidad, drag-drop).

@angular/material → Librería oficial de UI con componentes listos (toolbar, sidenav, botones, inputs, cards).

@angular/ssr → Herramientas para habilitar Server-Side Rendering en Angular.

📊 Librerías adicionales

chart.js → Librería de gráficos en JavaScript (barras, tortas, líneas).

ng2-charts → Wrapper para usar Chart.js directamente en Angular.

express → Framework de Node.js para levantar un servidor (usado en SSR).

rxjs → Librería de programación reactiva (Observables).

tslib → Helpers de TypeScript que optimizan el código compilado.

🛠️ Dependencias de desarrollo

@angular/cli → Herramienta de línea de comandos para generar y administrar proyectos Angular.

@angular/build → Utilidades para compilar y construir la aplicación.

@angular/compiler-cli → Compilador de Angular para TypeScript.

@types/node → Tipos de Node.js para usar en TypeScript.

@types/express → Tipos de Express para usar en TypeScript.

typescript → Lenguaje base que usa Angular.

prettier → Formateador de código para mantener estilo consistente.

vitest → Framework de testing rápido y moderno.

jsdom → Simulación de DOM en Node.js (útil para pruebas).


// 3_ Estructura de Carpetas

src/
 └── app/
      ├── components/
      │    ├── formularios/
      │    ├── dashboard/
      │    ├── pacientes/
      │    ├── zonas/
      │    ├── estadisticas/
      │    └── informes/
      │
      ├── services/
      │    ├── auth.service.ts
      │    ├── pacientes.service.ts
      │    ├── zonas.service.ts
      │    └── mock-data.service.ts
      │
      ├── models/
      │    ├── paciente.model.ts
      │    ├── zona.model.ts
      │    └── usuario.model.ts
      │
      ├── guards/
      │    └── auth.guard.ts
      │
      ├── shared/
      │    ├── components/
      │    │    ├── card/
      │    │    ├── table/
      │    │    └── chart/
      │    ├── pipes/
      │    └── directives/
      │
      ├── app-routing.module.ts
      ├── app.component.ts
      ├── app.component.html
      ├── app.component.scss
      └── app.module.ts



📂 Explicación de la estructura

components/  
Contiene todos los componentes visuales de la aplicación.

formularios/ → Aquí van los formularios de edición, creación o actualización de datos (ejemplo: formulario de paciente, formulario de zona).

dashboard/ → Componentes relacionados al panel principal (gráficos, métricas, tarjetas de resumen).

pacientes/ → Listados, detalle y vistas relacionadas con pacientes.

zonas/ → Componentes para mostrar y gestionar las zonas del hospital.

estadisticas/ → Gráficos y reportes estadísticos (ejemplo: distribución de enfermedades).

informes/ → Secciones para generar y visualizar informes.


services/  
Contiene la lógica de negocio y comunicación con datos (aunque en este prototipo serán mockeados).

auth.service.ts → Manejo de login, roles y permisos.

pacientes.service.ts → Funciones para obtener y manipular datos de pacientes.

zonas.service.ts → Funciones para gestionar las zonas del hospital.

mock-data.service.ts → Servicio que provee datos simulados para la demo.


models/  
Define las interfaces y clases que representan las entidades del sistema.

paciente.model.ts → Estructura de un paciente (id, nombre, enfermedad, zona).

zona.model.ts → Estructura de una zona del hospital.

usuario.model.ts → Estructura de un usuario con rol y permisos.


guards/  
Contiene los AuthGuards que protegen las rutas según el rol del usuario.

auth.guard.ts → Verifica si el usuario está logueado y si tiene permisos para acceder a una ruta.  //Esto lo puede hacer el backend tambien


shared/  
Elementos reutilizables en toda la aplicación.

components/ → Componentes genéricos como card, table, chart.

pipes/ → Transformaciones de datos (ejemplo: formatear fechas, filtrar listas).

directives/ → Directivas personalizadas (ejemplo: resaltar campos inválidos).

utils/ → Funciones auxiliares (ejemplo: helpers para cálculos o validaciones).


Archivos raíz (app-routing.module.ts, app.module.ts, etc.)

app-routing.module.ts → Define las rutas principales y conecta los componentes.

app.module.ts → Módulo raíz que importa Angular Material, servicios y componentes.

app.component.* → Componente principal que sirve como layout base de la aplicación.