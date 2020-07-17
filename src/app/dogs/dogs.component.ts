import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html'
})
export class DogsComponent {
  constructor(private dataService: DataService) {}

  onFetchDogs() {
    console.log('Fetching dogs!');
    console.log(this.dataService.getDogs().subscribe(
      resp => console.log(resp),
      error => console.log(error)
    ));
  }
}
