import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [NavbarComponent],
    imports: [
        RouterModule,
        CommonModule,
        MatButtonModule
    ],
    exports: [NavbarComponent]
})
export class NavbarModule { }
