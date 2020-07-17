import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Dog } from '../dog.model';
import { DataService } from 'src/app/data.service';
import * as moment from 'moment';
@Component({
  selector: 'app-dog-new',
  templateUrl: './dog-new.component.html'
})
export class DogNewComponent implements OnInit{
  raza: string;
  dogs: any = [];
  dogsByBreed: Dog[] = [];
  dogForm: FormGroup;
  id: number;
  editMode: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute){
    this.raza = JSON.parse(localStorage.getItem('razaSeleccionada'));
    this.dogs = JSON.parse(localStorage.getItem('raza'));
  }

  ngOnInit() {
    this.dogForm = new FormGroup({
      'nombre': new FormControl(null, [Validators.required]),
      'fechaNacimiento': new FormControl(null, [Validators.required])
    });
    if (JSON.parse(localStorage.getItem('dogsByBreed')) !== null) {
      this.dogsByBreed = JSON.parse(localStorage.getItem('dogsByBreed'));
    } else {
      this.dogsByBreed = [];
    }
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
  }

  agregar() {
    //Capturar el index del la url
    const dogName = this.dogForm.value['nombre'];
    const dogFechaNacimiento = moment(this.dogForm.value['fechaNacimiento']).format('YYYY-MM-DD');
    const edad = moment().diff(dogFechaNacimiento, 'years');
    console.log(dogFechaNacimiento);
    let newDog: Dog = {nombre: dogName, fechaNacimiento: dogFechaNacimiento, edad };
    //Cantidad del formulario
    this.dogs[this.id].cantidad++;
    this.dogs[this.id].perrosPorRaza.push(newDog);
    localStorage.setItem('raza', JSON.stringify(this.dogs));
    // Eliminar raza seleccionada
    localStorage.removeItem('razaSeleccionada');

    //Router devolver al home
    this.router.navigate(['razas']);
  }
}
