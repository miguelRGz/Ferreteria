import { Routes } from '@angular/router';
import { GestionUsuarioComponent } from './gestion-usuario.component';

export const GestionRouting: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: GestionUsuarioComponent
        }]
    }
];

