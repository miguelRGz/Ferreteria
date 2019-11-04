import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdChartComponent } from './md-chart/md-chart.component';
import { MdTableComponent } from './md-table/md-table.component';
import { RouterModule } from '@angular/router';

export interface DropdownLink {
    title: string;
    iconClass?: string;
    routerLink?: string;
}

export enum NavItemType {
    Sidebar = 1,
    NavbarLeft = 2,
    NavbarRight = 3
}

export interface NavItem {
    type: NavItemType;
    title: string;
    routerLink?: string;
    iconClass?: string;
    numNotifications?: number;
    dropdownItems?: (DropdownLink | 'separator')[];
}

@NgModule({
  declarations: [MdChartComponent, MdTableComponent],
  imports: [
    CommonModule, RouterModule
    ],
    exports: [
        MdTableComponent,
        MdChartComponent
    ]
})
export class MdModule { }
