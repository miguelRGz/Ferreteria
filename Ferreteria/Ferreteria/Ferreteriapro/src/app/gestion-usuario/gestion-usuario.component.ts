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


    calculaListas() {
        //console.log('entrando al metodo')

        let listaPermisosPadre = ["CONSULTA", "OPERACION", "ADMIN", "AUTORIZA"];

        let listaPermisosh1 = ["CONSULTA", "OPERACION", "ADMIN", "AUTORIZA"];

        let listaPermisosh2 = ["CONSULTA", "OPERACION", "ADMIN", "AUTORIZA"];


        console.log(listaPermisosPadre);
        //this.remove1(listaPermisosPadre, "OPERACION");
        //console.log(listaPermisosPadre);
        //this.remove1(listaPermisosPadre, "OPERACION");
        //console.log(listaPermisosPadre);
        //listaPermisosPadre.forEach(x => {
        //    //debugger;
        //    listaPermisosh1.forEach(y => {
        //        debugger;
                
        //        console.log(y);
        //    });
        //    console.log(x);
        //});
        const l1 = this.remove2(listaPermisosh1, "OPERACION");
        console.log(l1);
        const l2 = this.remove2(listaPermisosh2, "OPERACION");
        console.log(l1);

    }

    remove(array, element) {
        const index = array.indexOf(element);
        array.splice(index, 1);
    }

    remove1(array, element) {
        const index = array.indexOf(element);
        if (index !== -1) {
              array.splice(index, 1);
          }
      }

    remove2(array, element) {
        return array.filter(el => el !== element);
    }

}

