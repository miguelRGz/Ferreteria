import { Component, OnInit } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { TreeTableModule } from 'primeng/treetable';
import { TreeNode } from 'primeng/api';
import {NodeService} from './../../services/node.service'

export interface TreeNode {
    data?: any;
    children?: TreeNode[];
    leaf?: boolean;
    expanded?: boolean;
}

@Component({
  selector: 'app-editar-usuario-stepper',
    templateUrl: './editar-usuario-stepper.component.html',
    styleUrls: ['./editar-usuario-stepper.component.css'],
})
export class EditarUsuarioStepperComponent implements OnInit {

    files: TreeNode[];
    cols: any[];

  constructor(private nodoService:NodeService) { }

    ngOnInit() {
        this.nodoService.getFileSystem().then(files => {
            this.files = files;
            console.log(files);
        });
        //console.log(files);
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
  }

}
