import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionUsuarioComponent } from './gestion-usuario.component';
import { RouterModule } from '@angular/router';
import { GestionRouting } from './gestion.routing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';



@NgModule({
    declarations: [GestionUsuarioComponent, EditarUsuarioComponent],
    entryComponents: [EditarUsuarioComponent],
    imports: [
        RouterModule.forChild(GestionRouting),
        CommonModule,
        FormsModule,
        MaterialModule
  ]
})
export class GestionUsuarioModule { }
