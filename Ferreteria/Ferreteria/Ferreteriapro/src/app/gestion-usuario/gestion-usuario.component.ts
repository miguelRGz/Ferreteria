import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { TreeTableModule } from 'primeng/treetable';
import { TreeNode } from 'primeng/api';
import { NodeService } from './../services/node.service'
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarUsuarioStepperComponent } from './editar-usuario-stepper/editar-usuario-stepper.component';


@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.css']
})
export class GestionUsuarioComponent{
    constructor(public dialog: MatDialog) { }

    openDialog() {
        const dialogRef = this.dialog.open(EditarUsuarioComponent, {
            disableClose: true,
            autoFocus: true,
            height: '720px',
            width: '1200px',
            panelClass: 'custom-modalbox',
            //backdropClass: 'backdropBackground',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog rsult: ${result}`);
        });
    }

    openDialogStepper() {
        const dialogRef = this.dialog.open(EditarUsuarioStepperComponent, {
            disableClose: false,
            autoFocus: true,
            height: '720px',
            width: '1200px',
            panelClass: 'backdropBackground',
        });
    }

}

