import { Component } from '@angular/core';
import { Personaje } from './models/personaje.model';
import { PersonajeService } from './services/personaje.service';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RickMorty';

  private role:string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  username?:string;

  constructor(private tokenStorageService: TokenStorageService){}

  ngOnInit():void{
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
