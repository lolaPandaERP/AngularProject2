import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    // path: '', loadChildren: () => import('')
    //   .then(m => m.AppRoutingModule)
  },
  {
    // path: 'admin', loadChildren: () => import('../Auth/admin-routing.module')
    //   .then(m => m.AdminRoutingModule)
  },
  {
    // path: 'auth', loadChildren: () => import('./auth/auth.module')
    //   .then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
