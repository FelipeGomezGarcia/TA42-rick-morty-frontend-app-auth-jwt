import { Component} from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { PersonajeService } from '../services/personaje.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  personajes:any=null;
  currentPersonaje:Personaje={};
  currentIndex = -1;
  name = '';
  isLoggedIn = false;
  username?:string;

  constructor(private datosService: PersonajeService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = JSON.stringify(user);
    }
    this.loadList();
  }

  loadList():void{
    this.datosService.getAll().subscribe(
      results => {this.personajes = results
      }
    );

  }

  searchPersonaje():void{
    this.currentPersonaje = {};
    this.currentIndex = -1;

    this.datosService.findByName(this.name)
    .subscribe(
      data =>{
        this.personajes = data;
      },
      error =>{
        console.log(error);
      }
    )
  }


}
