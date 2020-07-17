import { Component } from "@angular/core";
import { Dog } from '../dog.model';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html'
})
export class DogListComponent {
  dogs: Dog[];
}
