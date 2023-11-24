import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerRegComponent } from './components/customer/customer-reg/customer-reg.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { NameListComponent } from './components/main/name-list/name-list.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    CustomerListComponent,
    CustomerRegComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    NameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
