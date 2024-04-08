import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboadbodyComponent } from './dashboadbody/dashboadbody.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { SalesOverviewDailyComponent } from './sales-overview-daily/sales-overview-daily.component';
import { SalesOverviewMonthlyComponent } from './sales-overview-monthly/sales-overview-monthly.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DailyCahrtPopupComponent } from './sales-overview-daily/daily-cahrt-popup/daily-cahrt-popup.component';
import { ZoneWiseSaleComponent } from './zone-wise-sale/zone-wise-sale.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import { UploadFileComponent } from './upload-file/upload-file.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DashboadbodyComponent,
    SalesOverviewDailyComponent,
    SalesOverviewMonthlyComponent,
    DailyCahrtPopupComponent,
    ZoneWiseSaleComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatTooltipModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'sales-overview-daily', component: SalesOverviewDailyComponent },
      { path: 'sales-overview-monthly', component: SalesOverviewMonthlyComponent },
      { path: 'division-wise-sale', component: ZoneWiseSaleComponent },
      { path: 'upload-file', component: UploadFileComponent },
    ])
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
