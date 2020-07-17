import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raza-list',
  templateUrl: './raza-list.component.html'
})
export class RazaListComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private dataService: DataService, private router: Router) {}
  dogs: any = [/*
    { imagen: 'vacio', nombreDeRaza: 'affenpinscher', cantidadDePerros: 1 },
    { imagen: 'vacio', nombreDeRaza: 'african', cantidadDePerros: 2 },
    { imagen: 'vacio', nombreDeRaza: 'airedale', cantidadDePerros: 3 },
    { imagen: 'vacio', nombreDeRaza: 'akita', cantidadDePerros: 4 } */
  ]


  ngOnInit() {

    if(JSON.parse(localStorage.getItem('raza')) !== null) {
      this.dogs = JSON.parse(localStorage.getItem('raza'));
    } else {
      this.fillDogs();
    }
  }


  fillDogs() {
    this.subscription = this.dataService.getDogs().subscribe(
      response => {
        for (const i of Object.keys(response.message)) {
          // this.dogs.push(i);
          this.dataService.getDogImage(i).subscribe(
            resp =>  this.dogs.push({raza: i, img : resp.message, cantidad: 0 })
          )
        }
      }
    )
  }

  agregar(index: number, raza: string){
    localStorage.setItem('raza', JSON.stringify(this.dogs));
    localStorage.setItem('razaSeleccionada', JSON.stringify(raza));
    this.router.navigate(['new/',index]);
  }

  listar() {
    this.router.navigate(['dogs']);
  }

  ngOnDestroy() {
    if(this.subscription !== undefined) this.subscription.unsubscribe();
  }

}
