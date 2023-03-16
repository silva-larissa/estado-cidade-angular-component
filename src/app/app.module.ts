import { TesteComponent } from './teste/teste.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DxSelectBoxModule, DxTemplateModule, DxTextBoxModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { CidadeEstadoComponent } from './cidade-estado/cidade-estado.component';



@NgModule({
  declarations: [
    AppComponent,
    CidadeEstadoComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTemplateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
