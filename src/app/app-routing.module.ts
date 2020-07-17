import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { DogNewComponent } from './dogs/dog-new/dog-new.component';
import { DogListComponent } from './dogs/dog-list/dog-list.component';
import { DogEditComponent } from './dogs/dog-edit/dog-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/razas', pathMatch: 'full' },
  { path: 'razas', component: DogsComponent, /* children: [
    { path: 'new/:id', component: DogEditComponent }
  ] */},
  { path: 'new/:id', component: DogNewComponent },
  { path: 'edit/:idRaza/:idPerro', component: DogEditComponent },
  { path: 'dogs/:id', component: DogListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
