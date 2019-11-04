import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';


const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
    {
        path: '', component: AdminLayoutComponent,
        children:
            [
                { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
                { path: 'gestion-usuario', loadChildren:'./gestion-usuario/gestion-usuario.module#GestionUsuarioModule'}
            ]
    },
    //{ path: '', component: AuthLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
