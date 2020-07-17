import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Dog } from '../dog.model';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html'
})
export class DogListComponent implements OnInit {
  dogs: any[];
  id: number;
  dogRazaList: any[];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.dogs = JSON.parse(localStorage.getItem('raza'));
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
    this.dogRazaList = this.dogs[this.id].perrosPorRaza;
  }

  eliminar(index) {
    this.dogs[this.id].perrosPorRaza.splice(index, 1);
    this.dogs[this.id].cantidad--;
    localStorage.setItem('raza', JSON.stringify(this.dogs));
  }

  editar(index) {
    localStorage.setItem('perroEditar', JSON.stringify(this.dogs[this.id].perrosPorRaza[index]));
    this.router.navigate(['/edit', this.id, index]);
  }

}
