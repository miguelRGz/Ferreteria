import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';


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
            //height: '720px',
            //width: '1200px',
            panelClass:'custom-modalbox'
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog rsult: ${result}`);
        });
    }

}

