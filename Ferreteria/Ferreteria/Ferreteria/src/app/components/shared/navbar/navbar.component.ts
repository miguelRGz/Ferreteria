import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    mobile_menu_visible: any = 0;
    private nativeElement: Node;
    private toggleButton: any;
    private sidebarVisible: boolean;
    private _router: Subscription;


    constructor(location: Location, private renderer: Renderer, private element: ElementRef, private router: Router, ) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    hideSidebar() {
        const sidebar = document.getElementsByClassName('sidebar')[0];
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
  }

}
