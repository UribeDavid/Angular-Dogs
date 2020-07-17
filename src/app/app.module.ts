import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { RazaListComponent } from './dogs/raza-list/raza-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DogEditComponent } from './dogs/dog-edit/dog-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DogListComponent } from './dogs/dog-list/dog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    RazaListComponent,
    DogEditComponent,
    DogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
