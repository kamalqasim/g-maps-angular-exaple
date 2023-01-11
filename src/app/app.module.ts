import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GMapModule} from 'primeng/gmap';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RemoveHtmlTagPipe } from './remove-html-tag.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RemoveHtmlTagPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GMapModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    CheckboxModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
