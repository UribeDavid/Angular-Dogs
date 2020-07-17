import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dog-edit',
  templateUrl: './dog-edit.component.html'
})
export class DogEditComponent implements OnInit{
  raza: string;
  dogs: any = [];
  dogForm: FormGroup;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute){
    // localStorage.removeItem('raza');
    this.raza = JSON.parse(localStorage.getItem('razaSeleccionada'));
    this.dogs = JSON.parse(localStorage.getItem('raza'));



  }

  ngOnInit() {
    this.dogForm = new FormGroup({
      'nombre': new FormControl(null, [Validators.required]),
      'fechaNacimiento': new FormControl(null, [Validators.required])
    });
  }

  onAgregar() {
    //Capturar el index del la url
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
    // Eliminar raza seleccionada
    // localStorage.removeItem('razaSeleccionada');
    //Cantidad del formulario
    this.dogs[this.id].cantidad = 20;
    localStorage.setItem('raza', JSON.stringify(this.dogs));
    //Router devolver al home
    //this.router.navigate(['dogs']);
  }
}
