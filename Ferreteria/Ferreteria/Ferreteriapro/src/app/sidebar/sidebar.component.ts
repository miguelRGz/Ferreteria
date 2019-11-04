import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
//import { Menu } from '../shared/model/security/menu.model';
//import { AuthService } from '../security/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
//import { Globals } from '../utilerias/utilerias/service/Globals';
import { DomSanitizer } from '@angular/platform-browser';
declare const $: any;

export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'dashboard'
},{
        path: '/gestion-usuario',
        title: 'Gestion Usuarios',
        type: 'link',
        icontype: 'people'

    }
];

@Component({
    selector: 'app-sidebar-cmp',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    //public menuItems: Menu[];
    public menuItems: any[];
    //pNombre: string;
    //fotosidebar: any;
    //fecha: Date = new Date();
    //constructor(private router: Router, private sanitizer: DomSanitizer) { }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    }

    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }

}
