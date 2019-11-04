import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from 'angular-datatables';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        DataTablesModule
    ],
    declarations: [
        DashboardComponent,
    ]
})

export class DashboardModule { }
