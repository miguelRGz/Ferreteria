import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeMX from '@angular/common/locales/es-MX';
import { MatTreeModule } from '@angular/material';
import { DataTablesModule } from 'angular-datatables';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatVideoModule } from 'mat-video';

registerLocaleData(localeMX, 'es-MX');
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TreeTableModule } from 'primeng/treetable';
import { TreeNode } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FixedpluginModule } from './shared/fixedplugin/fixedplugin.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwtInterceptor } from './security/helper/jwt.interceptor';
import { ErrorInterceptor } from './security/helper/error.interceptor';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { NodeService } from './services/node.service'

@NgModule({
    exports: [
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        NgxPaginationModule,
        MatVideoModule,
        TreeTableModule
    ],
    declarations: []
})
export class MaterialModule { }

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PaginaErrorComponent
  ],
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      FormsModule,
      BrowserModule,
      AppRoutingModule,
      HttpModule,
      MaterialModule,
      MatNativeDateModule,
      SidebarModule,
      NavbarModule,
      FooterModule,
      FixedpluginModule,
      NgxPaginationModule,
      MatTreeModule,
      DataTablesModule,
        NgxMatSelectSearchModule,
        TreeTableModule,
        HttpClientModule
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
