import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListTableComponent } from './list-table/list-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { TextMaskModule } from 'angular2-text-mask';
import { RequestInterceptor } from './interceptor/request.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ListTableComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    Ng2TelInputModule,
    MatCheckboxModule,
    MatTooltipModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    TextMaskModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
