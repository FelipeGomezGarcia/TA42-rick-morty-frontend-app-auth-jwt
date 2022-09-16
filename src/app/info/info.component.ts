import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personaje } from '../models/personaje.model';
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  personaje: Personaje = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  }
  id: any = [];
  mensaje='';

  constructor(private datosService: PersonajeService, private activeRoute: ActivatedRoute,private router:Router) {
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get('id') || '[]');
  }

  ngOnInit(): void {
    this.datosService.get(this.id).subscribe(
      results => {
        this.personaje = results
      }
    );
  }

  updatePersonaje():void{
    this.mensaje='';
    this.datosService.update(this.id,this.personaje)
    .subscribe(
      response =>{
        console.log(response)
        this.mensaje = response.mensaje?response.mensaje:'Este personaje se ha actualizado!!';
      },
      error =>{
        console.log(error);
      }
    )
  }

  deletePersonaje():void{
    this.datosService.delete(this.id)
    .subscribe(
      response =>{
        console.log(response);
        this.router.navigate(['/personajes']);
      },
      error =>{
        console.log(error);
      }
    )
  }
}
