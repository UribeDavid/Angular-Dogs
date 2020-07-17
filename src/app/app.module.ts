import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { RazaListComponent } from './dogs/raza-list/raza-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DogNewComponent } from './dogs/dog-new/dog-new.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DogListComponent } from './dogs/dog-list/dog-list.component';
import { MatInputModule } from '@angular/material/input'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DogEditComponent } from './dogs/dog-edit/dog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    RazaListComponent,
    DogNewComponent,
    DogListComponent,
    DogEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
