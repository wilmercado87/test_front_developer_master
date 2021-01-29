import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    AppComponent,
    InfoComponent,
    TableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
