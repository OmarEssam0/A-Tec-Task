import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonComponent } from './components/button/button.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChipsModule } from 'primeng/chips';
import { SplitButtonModule } from 'primeng/splitbutton';
import{TranslateHttpLoader} from '@ngx-translate/http-loader'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module,
    FormsModule,
    InputTextModule,
    TagModule,
    DialogModule,
    PanelModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    ChipsModule,
    SplitButtonModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader:{
          provide: TranslateLoader,
          useFactory:HttpLoaderFactory,
          deps:[HttpClient]
        }
      }
    )
  ],
  providers: [
    DialogService ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
