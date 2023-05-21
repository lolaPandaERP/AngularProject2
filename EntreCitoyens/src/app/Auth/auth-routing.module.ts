import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  // La première route, path: '', correspond à la route racine de notre application.
  // Elle est chargée en utilisant la méthode loadChildren qui importe le module AppModule depuis le chemin relatif '../app-routing.module'.
  // Lorsque cette route est activée, le module AppModule sera chargé.
  {
    path: '', loadChildren: () => import('../app-routing.module')
      .then(m => m.AppRoutingModule)
  },
  // Les deux routes suivantes path: 'admin' et path: 'auth',
  // sont des routes enfants qui sont chargées lorsque les chemins respectifs /admin et /auth sont activés.
  // Elles utilisent également la méthode loadChildren pour importer les modules AdminModule et AuthModule depuis leurs chemins respectifs.
  {
    path: 'admin', loadChildren: () => import('../Auth/admin-routing.module')
      .then(m => m.AdminRoutingModule)
  },
  // {
  //   path: 'auth', loadChildren: () => import('./auth/auth.module')
  //     .then(m => m.AuthModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
