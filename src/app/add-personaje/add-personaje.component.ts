import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrls: ['./add-personaje.component.css']
})
export class AddPersonajeComponent implements OnInit {

  personaje: Personaje = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  }
  guardado = false;

  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {
  }

  savePersonaje():void{
    const data = {
      name: this.personaje.name,
      status: this.personaje.status,
      gender: this.personaje.gender,
      origin: this.personaje.origin,
      image: this.personaje.image
    }

    this.personajeService.create(data)
    .subscribe(
      response =>{
        console.log(response);
        this.guardado = true;
      },
      error =>{
        console.log(error);
      }

    )
  }

  newPersonaje(){
    this.guardado=false;
    this.personaje={
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      image: ''
    };
  }

}
