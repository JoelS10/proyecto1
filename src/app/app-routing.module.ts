import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',  // Redirige a la página de login por defecto
    pathMatch: 'full'
  },
  {
    path: 'evento/:id', // Ruta para crear/editar evento
    loadChildren: () => import('./paginas/evento/evento.module').then(m => m.EventoPageModule),
  },
  {
    path: 'tarea/:id', // Ruta para crear/editar tarea
    loadChildren: () => import('./paginas/tarea/tarea.module').then(m => m.TareaPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'buscar-eventos',
    loadChildren: () => import('./paginas/buscar-eventos/buscar-eventos.module').then( m => m.BuscarEventosPageModule)
  },
  {
    path: 'buscar-tareas',
    loadChildren: () => import('./paginas/buscar-tareas/buscar-tareas.module').then( m => m.BuscarTareasPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
