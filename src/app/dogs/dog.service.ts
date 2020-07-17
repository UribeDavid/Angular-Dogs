import { Subject } from 'rxjs';
import { Dog } from './dog.model';

export class DogService {
  dogChanges = new Subject<Dog[]>();

  dogs: Dog[] = [];
}
