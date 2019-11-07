import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TreeNode } from '../gestion-usuario/editar-usuario-stepper/editar-usuario-stepper.component';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) { }

    private url: string = "http://localhost:3000/data";

    getFileSystem() {
        return this.http.get(this.url)
            .toPromise()
            .then(res => <TreeNode[]>res);
        
    }

    
}
