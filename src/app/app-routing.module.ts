import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./crearcuenta/crearcuenta.module').then( m => m.CrearcuentaPageModule)
  },
  {
    path: 'contrasegnaolvidada',
    loadChildren: () => import('./contrasegnaolvidada/contrasegnaolvidada.module').then( m => m.ContrasegnaolvidadaPageModule)
  },
  {
    path: 'recuperacion',
    loadChildren: () => import('./recuperacion/recuperacion.module').then( m => m.RecuperacionPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'mantenimientos',
    loadChildren: () => import('./mantenimientos/mantenimientos.module').then( m => m.MantenimientosPageModule)
  },
  {
    path: 'servicios-electricos',
    loadChildren: () => import('./servicios-electricos/servicios-electricos.module').then( m => m.ServiciosElectricosPageModule)
  },
  {
    path: 'otros-servicios',
    loadChildren: () => import('./otros-servicios/otros-servicios.module').then( m => m.OtrosServiciosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
