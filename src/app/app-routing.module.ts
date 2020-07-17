import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { DogEditComponent } from './dogs/dog-edit/dog-edit.component';
import { DogListComponent } from './dogs/dog-list/dog-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/razas', pathMatch: 'full' },
  { path: 'razas', component: DogsComponent},
  { path: 'new/:id', component: DogEditComponent },
  { path: 'dogs', component: DogListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
