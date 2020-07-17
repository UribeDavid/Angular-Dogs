import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Dog } from '../dog.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-dog-edit',
  templateUrl: './dog-edit.component.html'
})
export class DogEditComponent implements OnInit{

  dogEditForm: FormGroup;
  perroAEditar: Dog;
  idRaza: number;
  idPerro: number;
  raza: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.idRaza = params['idRaza'];
        this.idPerro = params['idPerro']
      }
    )
    this.raza = JSON.parse(localStorage.getItem('razaSeleccionada'));
    this.perroAEditar = JSON.parse(localStorage.getItem('perroEditar'));
    this.dogEditForm = new FormGroup({
      'nombre': new FormControl(this.perroAEditar.nombre, [Validators.required]),
      'fechaNacimiento': new FormControl(this.perroAEditar.fechaNacimiento, [Validators.required])
    });
  }

  guardar() {
    let perros = JSON.parse(localStorage.getItem('raza'));
    const fechaNacimiento = moment(this.dogEditForm.value['fechaNacimiento']).format('YYYY-MM-DD');
    const edad = moment().diff(fechaNacimiento, 'years');
    perros[this.idRaza].perrosPorRaza[this.idPerro] = {
      nombre: this.dogEditForm.value['nombre'],
      fechaNacimiento: fechaNacimiento,
      edad
    }
    localStorage.setItem('raza', JSON.stringify(perros));
    localStorage.removeItem('razaSeleccionada');
    this.router.navigate(['/razas']);
  }
}
